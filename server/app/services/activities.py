import requests

ip_address = requests.get('https://ipinfo.io/json')
response = ip_address.json()
print(response)

# Create request to get activities
from reverse_geocode import get

'''
Sample get function response:
{'country_code': 'GB', 'city': 'Thamesmead', 'latitude': 51.50372, 'longitude': 0.11982, 'population': 31824, 'state': 'England', 'county': 'Greater London', 'country': 'United Kingdom'}
'''

def get_location(coords: tuple) -> int:
    location_details = get(coords)
    location = f"{location_details['city']}, {location_details['state']}"
    return location

# my_coords = (51.50372, 0.11982)
# print(get_location(my_coords))

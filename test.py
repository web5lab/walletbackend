import requests
from concurrent.futures import ThreadPoolExecutor

API_URL = "https://img.dexcrash.com/images/1691923135834-crashdex.png"
NUM_REQUESTS = 10000000
CONCURRENCY_LEVEL = 10

def fetch_url():
    try:
        response = requests.get(API_URL)
        response.raise_for_status()  # Check if the request was successful
        return True
    except requests.RequestException as e:
        print(f"Error during request: {e}")
        return False

def main():
    with ThreadPoolExecutor(max_workers=CONCURRENCY_LEVEL) as executor:
        results = list(executor.map(fetch_url, [None]*NUM_REQUESTS))
    
    success_count = results.count(True)
    error_count = results.count(False)

    print(f"Total successful requests: {success_count}")
    print(f"Total failed requests: {error_count}")

if __name__ == "__main__":
    main()

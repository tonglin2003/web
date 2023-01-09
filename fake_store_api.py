import requests
from pprint import pprint

# organizing products into list

class AllProducts():
    '''
    Connection the Fake Store API
    '''

    def __init__(self):
        self.url = "https://fakestoreapi.com/"

    def get_product_by_id(self, product_id: int):
        '''
        :param product_id:
        :return: JSON of product with the product ID of params of this function
        '''

        response = requests.get(url=f"{self.url}products/{product_id}")
        return response.json()

    def get_all_products(self):
        '''
        :return: a JSON format of all products information
        '''

        response = requests.get(url=f"{self.url}products")
        return response.json()

    def add_product(self, title, price, description, image, category):
        '''
        NOTE: It won't actually upload anything to the website. We will add new product functions in database!
        :param title:
        :param price:
        :param description:
        :param image:
        :param category:
        :return: the id of new product
        '''

        new_product = {
            "title": title,
            "price": price,
            "description": description,
            "image": image,
            "category": category
        }
        response = requests.post(url=f"{self.url}products", json=new_product)
        return response.json()

    def delete_product(self):
        pass

    def get_product_categories_tag(self):
        response = requests.get(url=f"{self.url}products/categories")
        return response.json()

    def get_product_by_category(self, category):
        response = requests.get(url=f"{self.url}/category/{category}")
        return response.json()

    def get_product_info(self):
        '''
        :return: returns dictionary of product_id as keys, each key contains another dictionary:
            product_title: title of the project in type of String
            product_image: image of the product show as a website link (example: https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)
            product_price: price of the product in type double
        '''

        products = self.get_all_products()
        product_dictionary = {}

        for product in products:
            product_dictionary[product['id']] = {"product_title": product['title'],
                                                 "product_image": product['image'],
                                                 "product_price": product['price']
                                                 }
        return product_dictionary


class Users():
    pass



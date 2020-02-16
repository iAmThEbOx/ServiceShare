#clustering based recommender system 


import tensorflow as tf
import scikit-learn
import sys
import pandas as pd
import numpy as np 
import os.path
import time
import pickle
import re 


# collect data from event types and classes
# build out layers of the model
# include the recommender system
# convert output into the front-end of app via simple route with javascript 
# identity-based clustering algorithm


def recommender(user_id, status):
    start = time.time()
    if status:
        print("RallyAI has started...")
    start = time.time()
    
    validate_user_id(user_id)

    data = preprocess_data_rec_engine(status=True)


def main():
    class options:
        # first param
        def __init__(self, lgbtq, gender_equality, poverty, education):
            self.lgbtq = .1 if (lgbtq) else 0
            self.gender_equality = .2 if (gender_equality) else 0
            self.poverty = .3 if (poverty) else 0:
            self.education = .4 if (education) else 0:
                def user_id_selection = {dict}:
                   # based on the number that is assigned for each event category, write conditional
        def (self, rallies, community_service, philanthropy, fundraisers_drives):
            val = 0
            # if the total value of the choices are greater than 1, set equal to 1 in order to rank at the end and compare what the final results will be 
            if (val + (lgbtq) + (gender_equality) > 1):
                val = rallies
            elif (val + (gender_equality) + (poverty) > 1.5 and val + (gender_equality) + (poverty) < 2.5):
                val = community_service
            elif (val + (poverty) + (education) > 2.5 and val + (poverty) + (education) < 3.5):
                val = philanthropy
            elif (val + (poverty) + (education) > .6):
            key_response1 = int(self.rallies)
            key_response2 = int(self.communities)
            key_response3 = int(self.philanthropy)

            if key_response1 == key_response1:
                self.rallies = True
            elif key_response2 == key_response2:
                self.community_service = True
            elif key_response3 == key_response3:
                self.philanthropy = True    
        def display(recommended_category):
            print('\n')
































if __name__ == '__main__':
    main()
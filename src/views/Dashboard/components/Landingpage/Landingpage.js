import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import IconButton from "@material-ui/core/IconButton";
import { Card, CardContent, Grid, Typography, } from '@material-ui/core';
import "../../../../../src/App.css";
import Button from '@material-ui/core/Button';
import { render } from 'react-dom';
import { shadows } from '@material-ui/system';
import {FaPizzaSlice,FaFish,FaLeaf} from 'react-icons/fa'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { withStyles } from '@material-ui/styles';
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ShareIcon from '@material-ui/icons/Share';


const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    color:'rgb(134, 113, 95)',
    backgroundColor: theme.palette.background.paper
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  Restaurant: {
    fontSize:'16px',
    fontFamily: 'Montserrat',
    fontWeight:'bolder !important',
    fontStyle:'normal',
    color: 'rgb(134, 113, 95)',
    letterSpacing: '2.3px',
  },
  Card: {
    width:'85%',
    height:'50vh',
    borderRadius:'10px',
    boxShadow:'1px 1px 10px 2px silver',
    display:'flex',
    flexGrow:1,
    marginBottom:'5vh'
  },
  Heading: {
    fontFamily:'Montserrat',
    fontStyle:'normal',
    fontWeight:'bold',
    fontSize:'20px',
    color:'rgba(113,112,94,1)'
  },
  subHeading: {
    display:'inline',
    fontFamily:'Montserrat',
    fontStyle:'Normal',
    fontWeight:"normal",
    fontSize:'16px',
    color:'rgba(133,112,94,1)'
  },
  PizzaSize: {
    display:'inline',
    fontFamily:'Montserrat',
    fontStyle:'Normal',
    fontWeight:"lighter",
    fontSize:'12px',
    color:'rgba(133,112,94,1)'
  },
  Price : {
    paddingLeft:'2.5vh',
    display:'inline',
    fontFamily:'Montserrat',
    fontStyle:'Normal',
    fontWeight:"Normal",
    fontSize:'12px',
    color:'rgba(133,112,94,1)'
  },
  Ingredients: {
    display:'inline',
    fontFamily:'Montserrat',
    fontStyle:'Normal',
    fontWeight:"lighter",
    fontSize:'9px',
    color:'rgba(133,112,94,1)'
  },
  Pizza: {
    display:'inline',
    color:'rgba(133,112,94,1)',
    fontSize:'10px',
    marginLeft:'.5vh',
    marginTop:'.3vh',
    position:'absolute'
  },
  Fish: {
    display:'inline',
    color:'rgba(133,112,94,1)',
    fontSize:'15px',
    marginLeft:'3.5vh',
    paddingTop:'2vh'
  },
  Leaf: {
    display:'inline',
    color:'rgba(133,112,94,1)',
    fontSize:'12px',
    marginLeft:'1.5vh'
  }

});
class Landingpage extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
        // idStore: 9,
        // name: "Restaurante Titanic II",
        // address: "Calle Pedro Coca 22",
        // town: "Madrid",
        // postalCode: "02006",
        // country: "España",
        // phoneNumber: "666555888",
        // membership: null,
        // membershipType: 0,
        // logo: null,
        // menusList: [
        //     {
        //         idMenu: 7,
        //         name: "Menu name",
        //         currency: "€",
        //         isActive: 1,
        //         categoriesList: [
        //             {
        //                 idCategory: 103,
        //                 name: "Pizza",
        //                 isActive: 1,
        //                 order: null,
        //                 sectionsList: [
        //                     {
        //                         idSection: 205,
        //                         title: "Basic Pizza",
        //                         isActive: 0,
        //                         pictureUrl: null,
        //                         order: 1,
        //                         itemsList: [
        //                             {
        //                                 idItem: 199,
        //                                 title: "Pizza Marinara",
        //                                 details: "tomato, cheese",
        //                                 pictureUrl: null,
        //                                 order: 1,
        //                                 isActive: 1,
        //                                 Lines:[1],
        //                                 Icons: [2,3,10],
        //                                 pricesList: [
        //                                     {
        //                                         idPrice: 324,
        //                                         price: "9,95",
        //                                         priceOff: null,
        //                                         unit: "S"
        //                                     },
        //                                     {
        //                                       idPrice: 325,
        //                                       price: "9,95",
        //                                       priceOff: null,
        //                                       unit: "L"
        //                                   },
        //                                   {
        //                                     idPrice: 326,
        //                                     price: "14,80",
        //                                     priceOff: null,
        //                                     unit: "B"
        //                                   },
        //                                 ],
        //                                 tagsList: []
        //                             },
        //                             {
        //                                 idItem: 200,
        //                                 title: "Pizza Provolone",
        //                                 details: "tomato, Provolone, Cheese, Onion",
        //                                 pictureUrl: null,
        //                                 order: 2,
        //                                 isActive: 1,
        //                                 Lines: [1],
        //                                 Icons: [1,3,10 ],
        //                                 pricesList: [
        //                                     {
        //                                         idPrice: 325,
        //                                         price: "9,95",
        //                                         priceOff: null,
        //                                         unit: "S"
        //                                     },
        //                                     {
        //                                         idPrice: 326,
        //                                         price: "12,95",
        //                                         priceOff: null,
        //                                         unit: "L"
        //                                     },
        //                                     {
        //                                       idPrice: 336,
        //                                       price: "14,80",
        //                                       priceOff: null,
        //                                       unit: "B"
        //                                     }
                                            
        //                                 ],
        //                                 tagsList: []
        //                             },
        //                             {
        //                               idItem: 283,
        //                               title: "Pizza Pepperoni",
        //                               details: "tomato, Cheese",
        //                               pictureUrl: null,
        //                               order: 2,
        //                               isActive: 1,
                                      
        //                               Icons: [1,2,3 ],
        //                               pricesList: [
        //                                   {
        //                                       idPrice: 385,
        //                                       price: "9,95",
        //                                       priceOff: null,
        //                                       unit: "S"
        //                                   },
        //                                   {
        //                                       idPrice: 326,
        //                                       price: "12,95",
        //                                       priceOff: null,
        //                                       unit: "L"
        //                                   },
        //                                   {
        //                                     idPrice: 336,
        //                                     price: "14,80",
        //                                     priceOff: null,
        //                                     unit: "B"
        //                                   }
                                          
        //                               ],
        //                               tagsList: []
        //                           }
        //                         ]
        //                     },
        //                     {
        //                         idSection: 206,
        //                         title: "Premium Pan Pizza",
        //                         isActive: 1,
        //                         pictureUrl: null,
        //                         order: 2,
        //                         itemsList: [
        //                             {
        //                                 idItem: 201,
        //                                 title: "Pizza basilico",
        //                                 details: "tomato, cheese",
        //                                 pictureUrl: null,
        //                                 order: 1,
        //                                 isActive: 1,
        //                                 Icons: [1,10],
        //                                 pricesList: [
        //                                     {
        //                                         idPrice: 347,
        //                                         price: "9,95",
        //                                         priceOff: null,
        //                                         unit: "S"
        //                                     },
        //                                     {
        //                                         idPrice: 328,
        //                                         price: "12,95",
        //                                         priceOff: null,
        //                                         unit: "L"
        //                                     },
        //                                     {
        //                                       idPrice: 336,
        //                                       price: "14,80",
        //                                       priceOff: null,
        //                                       unit: "B"
        //                                     }
        //                                 ],
        //                             },
        //                             {
        //                               idItem: 201,
        //                               title: "American Pizza",
        //                               details: "tomato, cheese",
        //                               pictureUrl: null,
        //                               order: 1,
        //                               isActive: 1,
        //                               Lines:[1],
        //                               Icons: [1,2,10 ],
        //                               pricesList: [
        //                                   {
        //                                       idPrice: 347,
        //                                       price: "9,95",
        //                                       priceOff: null,
        //                                       unit: "S"
        //                                   },
        //                                   {
        //                                       idPrice: 328,
        //                                       price: "12,95",
        //                                       priceOff: null,
        //                                       unit: "L"
        //                                   },
        //                                   {
        //                                     idPrice: 336,
        //                                     price: "14,80",
        //                                     priceOff: null,
        //                                     unit: "B"
        //                                   }
        //                               ],
        //                           },
        //                           {
        //                             idItem: 201,
        //                             title: "Pizza Pepperoni",
        //                             details: "tomato, cheese, Provolone, Onion",
        //                             pictureUrl: null,
        //                             order: 1,
        //                             isActive: 1,
                                    
        //                             Icons: [1,3],
        //                             pricesList: [
        //                                 {
        //                                     idPrice: 347,
        //                                     price: "9,95",
        //                                     priceOff: null,
        //                                     unit: "S"
        //                                 },
        //                                 {
        //                                     idPrice: 328,
        //                                     price: "12,95",
        //                                     priceOff: null,
        //                                     unit: "L"
        //                                 },
        //                                 {
        //                                   idPrice: 336,
        //                                   price: "14,80",
        //                                   priceOff: null,
        //                                   unit: "B"
        //                                 }
        //                             ],
        //                         }
        //                         ]
        //                     },
                            
        //                 ]
        //             },
                    
        //         ]
        //     }
        // ],
          idStore: 9,
          name: "Restaurante Titanic II",
          address: "Calle Pedro Coca 22",
          town: "Madrid",
          postalCode: "02006",
          country: "España",
          phoneNumber: "666555888",
          membership: null,
          membershipType: 0,
          logo: null,
          menusList: [
              {
                  idMenu: 7,
                  name: "Menu name",
                  currency: "€",
                  isActive: 1,
                  categoriesList: [
                      {
                          idCategory: 103,
                          name: "Category name",
                          isActive: 1,
                          order: null,
                          sectionsList: [
                              {
                                  idSection: 205,
                                  title: "Name Section 1",
                                  isActive: 0,
                                  pictureUrl: null,
                                  order: 1,
                                  itemsList: [
                                      {
                                          idItem: 199,
                                          Icons: [1,3],
                                          title: "Name Item 1",
                                          details: "tomato, cheese, olives, egg",
                                          pictureUrl: null,
                                          order: 1,
                                          isActive: 1,
                                          pricesList: [
                                              {
                                                  idPrice: 324,
                                                  price: 5.00,
                                                  priceOff: null,
                                                  unit: "Small"
                                              }
                                          ],
                                          tagsList: []
                                      },
                                      {
                                          idItem: 200,
                                          Icons: [1,3],
                                          title: "Name Item 2",
                                          details: "tomato, cheese, olives, egg",
                                          pictureUrl: null,
                                          order: 2,
                                          isActive: 1,
                                          pricesList: [
                                              {
                                                  idPrice: 325,
                                                  price: 77.00,
                                                  priceOff: null,
                                                  unit: "Small"
                                              },
                                              {
                                                  idPrice: 326,
                                                  price: 150.00,
                                                  priceOff: null,
                                                  unit: "Big"
                                              }
                                          ],
                                          tagsList: []
                                      }
                                  ]
                              },
                              {
                                  idSection: 206,
                                  title: "Name Section 2",
                                  isActive: 1,
                                  pictureUrl: null,
                                  order: 2,
                                  itemsList: [
                                      {
                                          idItem: 201,
                                          Icons: [1,3],
                                          title: "Name Item 3",
                                          details: "tomato, cheese, olives, egg",
                                          pictureUrl: null,
                                          order: 1,
                                          isActive: 1,
                                          pricesList: [
                                              {
                                                  idPrice: 327,
                                                  price: 20.00,
                                                  priceOff: null,
                                                  unit: "Small"
                                              },
                                              {
                                                  idPrice: 328,
                                                  price: 23.00,
                                                  priceOff: null,
                                                  unit: "M"
                                              },
                                              {
                                                  idPrice: 329,
                                                  price: 25.00,
                                                  priceOff: null,
                                                  unit: "XL"
                                              }
                                          ],
                                          tagsList: [
                                              {
                                                  idTag: 1,
                                                  name: "vegetarian",
                                                  info: "Vegetarian friendly",
                                                  icon: null
                                              },
                                              {
                                                  idTag: 3,
                                                  name: "spicy",
                                                  info: "Spicy",
                                                  icon: null
                                              },
                                              {
                                                  idTag: 59,
                                                  name: "lactose",
                                                  info: "Contains lactose",
                                                  icon: null
                                              }
                                          ]
                                      }
                                  ]
                              },
                              {
                                  idSection: 207,
                                  title: "Name of an Empty Section",
                                  isActive: 1,
                                  pictureUrl: null,
                                  order: 2,
                                  itemsList: []
                              }
                          ]
                      },
                      {
                          idCategory: 104,
                          name: "Category name 2",
                          isActive: 1,
                          order: null,
                          sectionsList: [
                              {
                                  idSection: 208,
                                  title: "Name Section 1",
                                  isActive: 0,
                                  pictureUrl: null,
                                  order: 1,
                                  itemsList: [
                                      {
                                          idItem: 202,
                                          Icons: [1,3],
                                          title: "Name Item 1",
                                          details: "Pepperoni, tomate, basil, cream sauce",
                                          pictureUrl: null,
                                          order: 1,
                                          isActive: 1,
                                          pricesList: [
                                              {
                                                  idPrice: 330,
                                                  price: 5.00,
                                                  priceOff: null,
                                                  unit: "Small"
                                              }
                                          ],
                                          tagsList: []
                                      },
                                      {
                                          idItem: 203,
                                          Icons: [1,3],
                                          title: "Name Item 2",
                                          details: "Pepperoni, tomate, basil, cream sauce",
                                          pictureUrl: null,
                                          order: 2,
                                          isActive: 1,
                                          pricesList: [
                                              {
                                                  idPrice: 331,
                                                  price: 77.00,
                                                  priceOff: null,
                                                  unit: "Small"
                                              },
                                              {
                                                  idPrice: 332,
                                                  price: 150.00,
                                                  priceOff: null,
                                                  unit: "Big"
                                              }
                                          ],
                                          tagsList: []
                                      }
                                  ]
                              },
                              {
                                  idSection: 209,
                                  title: "Name Section 2",
                                  isActive: 1,
                                  pictureUrl: null,
                                  order: 2,
                                  itemsList: [
                                      {
                                          idItem: 204,
                                          Icons: [1,3],
                                          title: "Name Item 3",
                                          details: "Pepperoni, tomate, basil, cream sauce",
                                          pictureUrl: null,
                                          order: 1,
                                          isActive: 1,
                                          pricesList: [
                                              {
                                                  idPrice: 333,
                                                  price: 20.00,
                                                  priceOff: null,
                                                  unit: "Small"
                                              },
                                              {
                                                  idPrice: 334,
                                                  price: 23.00,
                                                  priceOff: null,
                                                  unit: "M"
                                              },
                                              {
                                                  idPrice: 335,
                                                  price: 25.00,
                                                  priceOff: null,
                                                  unit: "XL"
                                              }
                                          ],
                                          tagsList: [
                                              {
                                                  idTag: 1,
                                                  name: "vegetarian",
                                                  info: "Vegetarian friendly",
                                                  icon: null
                                              },
                                              {
                                                  idTag: 3,
                                                  name: "spicy",
                                                  info: "Spicy",
                                                  icon: null
                                              },
                                              {
                                                  idTag: 59,
                                                  name: "lactose",
                                                  info: "Contains lactose",
                                                  icon: null
                                              }
                                          ]
                                      }
                                  ]
                              },
                              {
                                  idSection: 210,
                                  title: "Name of an Empty Section",
                                  isActive: 1,
                                  pictureUrl: null,
                                  order: 2,
                                  itemsList: []
                              }
                          ]
                      },
                      {
                          idCategory: 105,
                          name: "Category name 3",
                          isActive: 1,
                          order: null,
                          sectionsList: [
                              {
                                  idSection: 211,
                                  title: "Name Section 1",
                                  isActive: 0,
                                  pictureUrl: null,
                                  order: 1,
                                  itemsList: [
                                      {
                                          idItem: 205,
                                          Icons: [1,3],
                                          title: "Name Item 1",
                                          details: "Pepperoni, tomate, basil, cream sauce",
                                          pictureUrl: null,
                                          order: 1,
                                          isActive: 1,
                                          pricesList: [
                                              {
                                                  idPrice: 336,
                                                  price: 5.00,
                                                  priceOff: null,
                                                  unit: "Small"
                                              }
                                          ],
                                          tagsList: []
                                      },
                                      {
                                          idItem: 206,
                                          Icons: [1,3],
                                          title: "Name Item 2",
                                          details: "Pepperoni, tomate, basil, cream sauce",
                                          pictureUrl: null,
                                          order: 2,
                                          isActive: 1,
                                          pricesList: [
                                              {
                                                  idPrice: 337,
                                                  price: 77.00,
                                                  priceOff: null,
                                                  unit: "Small"
                                              },
                                              {
                                                  idPrice: 338,
                                                  price: 150.00,
                                                  priceOff: null,
                                                  unit: "Big"
                                              }
                                          ],
                                          tagsList: []
                                      }
                                  ]
                              },
                              {
                                  idSection: 212,
                                  title: "Name Section 2",
                                  isActive: 1,
                                  pictureUrl: null,
                                  order: 2,
                                  itemsList: [
                                      {
                                          idItem: 207,
                                          Icons: [1,3],
                                          title: "Name Item 3",
                                          details: "Pepperoni, tomate, basil, cream sauce",
                                          pictureUrl: null,
                                          order: 1,
                                          isActive: 1,
                                          pricesList: [
                                              {
                                                  idPrice: 339,
                                                  price: 20.00,
                                                  priceOff: null,
                                                  unit: "Small"
                                              },
                                              {
                                                  idPrice: 340,
                                                  price: 23.00,
                                                  priceOff: null,
                                                  unit: "M"
                                              },
                                              {
                                                  idPrice: 341,
                                                  price: 25.00,
                                                  priceOff: null,
                                                  unit: "XL"
                                              }
                                          ],
                                          tagsList: [
                                              {
                                                  idTag: 1,
                                                  name: "vegetarian",
                                                  info: "Vegetarian friendly",
                                                  icon: null
                                              },
                                              {
                                                  idTag: 3,
                                                  name: "spicy",
                                                  info: "Spicy",
                                                  icon: null
                                              },
                                              {
                                                  idTag: 59,
                                                  name: "lactose",
                                                  info: "Contains lactose",
                                                  icon: null
                                              }
                                          ]
                                      }
                                  ]
                              },
                              {
                                  idSection: 213,
                                  title: "Name of an Empty Section",
                                  isActive: 1,
                                  pictureUrl: null,
                                  order: 2,
                                  itemsList: []
                              }
                          ]
                      },
                      {
                          idCategory: 106,
                          name: "Category name 4",
                          isActive: 1,
                          order: null,
                          sectionsList: [
                              {
                                  idSection: 214,
                                  title: "Name Section 1",
                                  isActive: 0,
                                  pictureUrl: null,
                                  order: 1,
                                  itemsList: [
                                      {
                                          idItem: 208,
                                          Icons: [1,3],
                                          title: "Name Item 1",
                                          details: "Pepperoni, tomate, basil, cream sauce",
                                          pictureUrl: null,
                                          order: 1,
                                          isActive: 1,
                                          pricesList: [
                                              {
                                                  idPrice: 342,
                                                  price: 5.00,
                                                  priceOff: null,
                                                  unit: "Small"
                                              }
                                          ],
                                          tagsList: []
                                      },
                                      {
                                          idItem: 209,
                                          Icons: [1,3],
                                          title: "Name Item 2",
                                          details: "Pepperoni, tomate, basil, cream sauce",
                                          pictureUrl: null,
                                          order: 2,
                                          isActive: 1,
                                          pricesList: [
                                              {
                                                  idPrice: 343,
                                                  price: 77.00,
                                                  priceOff: null,
                                                  unit: "Small"
                                              },
                                              {
                                                  idPrice: 344,
                                                  price: 150.00,
                                                  priceOff: null,
                                                  unit: "Big"
                                              }
                                          ],
                                          tagsList: []
                                      }
                                  ]
                              },
                              {
                                  idSection: 215,
                                  title: "Name Section 2",
                                  isActive: 1,
                                  pictureUrl: null,
                                  order: 2,
                                  itemsList: [
                                      {
                                          idItem: 210,
                                          Icons: [1,3],
                                          title: "Name Item 3",
                                          details: "Pepperoni, tomate, basil, cream sauce",
                                          pictureUrl: null,
                                          order: 1,
                                          isActive: 1,
                                          pricesList: [
                                              {
                                                  idPrice: 345,
                                                  price: 20.00,
                                                  priceOff: null,
                                                  unit: "Small"
                                              },
                                              {
                                                  idPrice: 346,
                                                  price: 23.00,
                                                  priceOff: null,
                                                  unit: "M"
                                              },
                                              {
                                                  idPrice: 347,
                                                  price: 25.00,
                                                  priceOff: null,
                                                  unit: "XL"
                                              }
                                          ],
                                          tagsList: [
                                              {
                                                  idTag: 1,
                                                  name: "vegetarian",
                                                  info: "Vegetarian friendly",
                                                  icon: null
                                              },
                                              {
                                                  idTag: 3,
                                                  name: "spicy",
                                                  info: "Spicy",
                                                  icon: null
                                              },
                                              {
                                                  idTag: 59,
                                                  name: "lactose",
                                                  info: "Contains lactose",
                                                  icon: null
                                              }
                                          ]
                                      }
                                  ]
                              },
                              {
                                  idSection: 216,
                                  title: "Name of an Empty Section",
                                  isActive: 1,
                                  pictureUrl: null,
                                  order: 2,
                                  itemsList: []
                              }
                          ]
                      },
                      {
                          idCategory: 107,
                          name: "Category name 5",
                          isActive: 1,
                          order: null,
                          sectionsList: [
                              {
                                  idSection: 217,
                                  title: "Name Section 1",
                                  isActive: 0,
                                  pictureUrl: null,
                                  order: 1,
                                  itemsList: [
                                      {
                                          idItem: 211,
                                          Icons: [1,3],
                                          title: "Name Item 1",
                                          details: "Pepperoni, tomate, basil, cream sauce",
                                          pictureUrl: null,
                                          order: 1,
                                          isActive: 1,
                                          pricesList: [
                                              {
                                                  idPrice: 348,
                                                  price: 5.00,
                                                  priceOff: null,
                                                  unit: "Small"
                                              }
                                          ],
                                          tagsList: []
                                      },
                                      {
                                          idItem: 212,
                                          Icons: [1,3],
                                          title: "Name Item 2",
                                          details: "Pepperoni, tomate, basil, cream sauce",
                                          pictureUrl: null,
                                          order: 2,
                                          isActive: 1,
                                          pricesList: [
                                              {
                                                  idPrice: 349,
                                                  price: 77.00,
                                                  priceOff: null,
                                                  unit: "Small"
                                              },
                                              {
                                                  idPrice: 350,
                                                  price: 150.00,
                                                  priceOff: null,
                                                  unit: "Big"
                                              }
                                          ],
                                          tagsList: []
                                      }
                                  ]
                              },
                              {
                                  idSection: 218,
                                  title: "Name Section 2",
                                  isActive: 1,
                                  pictureUrl: null,
                                  order: 2,
                                  itemsList: [
                                      {
                                          idItem: 213,
                                          Icons: [1,3],
                                          title: "Name Item 3",
                                          details: "Pepperoni, tomate, basil, cream sauce",
                                          pictureUrl: null,
                                          order: 1,
                                          isActive: 1,
                                          pricesList: [
                                              {
                                                  idPrice: 351,
                                                  price: 20.00,
                                                  priceOff: null,
                                                  unit: "Small"
                                              },
                                              {
                                                  idPrice: 352,
                                                  price: 23.00,
                                                  priceOff: null,
                                                  unit: "M"
                                              },
                                              {
                                                  idPrice: 353,
                                                  price: 25.00,
                                                  priceOff: null,
                                                  unit: "XL"
                                              }
                                          ],
                                          tagsList: [
                                              {
                                                  idTag: 1,
                                                  name: "vegetarian",
                                                  info: "Vegetarian friendly",
                                                  icon: null
                                              },
                                              {
                                                  idTag: 3,
                                                  name: "spicy",
                                                  info: "Spicy",
                                                  icon: null
                                              },
                                              {
                                                  idTag: 59,
                                                  name: "lactose",
                                                  info: "Contains lactose",
                                                  icon: null
                                              }
                                          ]
                                      }
                                  ]
                              },
                              {
                                  idSection: 219,
                                  title: "Name of an Empty Section",
                                  isActive: 1,
                                  pictureUrl: null,
                                  order: 2,
                                  itemsList: []
                              }
                          ]
                      },
                      {
                          idCategory: 108,
                          name: "Category name 6",
                          isActive: 1,
                          order: null,
                          sectionsList: [
                              {
                                  idSection: 220,
                                  title: "Name Section 1",
                                  isActive: 0,
                                  pictureUrl: null,
                                  order: 1,
                                  itemsList: [
                                      {
                                          idItem: 214,
                                          Icons: [1,3],
                                          title: "Name Item 1",
                                          details: "Pepperoni, tomate, basil, cream sauce",
                                          pictureUrl: null,
                                          order: 1,
                                          isActive: 1,
                                          pricesList: [
                                              {
                                                  idPrice: 354,
                                                  price: 5.00,
                                                  priceOff: null,
                                                  unit: "Small"
                                              }
                                          ],
                                          tagsList: []
                                      },
                                      {
                                          idItem: 215,
                                          Icons: [1,3],
                                          title: "Name Item 2",
                                          details: "Pepperoni, tomate, basil, cream sauce",
                                          pictureUrl: null,
                                          order: 2,
                                          isActive: 1,
                                          pricesList: [
                                              {
                                                  idPrice: 355,
                                                  price: 77.00,
                                                  priceOff: null,
                                                  unit: "Small"
                                              },
                                              {
                                                  idPrice: 356,
                                                  price: 150.00,
                                                  priceOff: null,
                                                  unit: "Big"
                                              }
                                          ],
                                          tagsList: []
                                      }
                                  ]
                              },
                              {
                                  idSection: 221,
                                  title: "Name Section 2",
                                  isActive: 1,
                                  pictureUrl: null,
                                  order: 2,
                                  itemsList: [
                                      {
                                          idItem: 216,
                                          Icons: [1,3],
                                          title: "Name Item 3",
                                          details: "Pepperoni, tomate, basil, cream sauce",
                                          pictureUrl: null,
                                          order: 1,
                                          isActive: 1,
                                          pricesList: [
                                              {
                                                  idPrice: 357,
                                                  price: 20.00,
                                                  priceOff: null,
                                                  unit: "Small"
                                              },
                                              {
                                                  idPrice: 358,
                                                  price: 23.00,
                                                  priceOff: null,
                                                  unit: "M"
                                              },
                                              {
                                                  idPrice: 359,
                                                  price: 25.00,
                                                  priceOff: null,
                                                  unit: "XL"
                                              }
                                          ],
                                          tagsList: [
                                              {
                                                  idTag: 1,
                                                  name: "vegetarian",
                                                  info: "Vegetarian friendly",
                                                  icon: null
                                              },
                                              {
                                                  idTag: 3,
                                                  name: "spicy",
                                                  info: "Spicy",
                                                  icon: null
                                              },
                                              {
                                                  idTag: 59,
                                                  name: "lactose",
                                                  info: "Contains lactose",
                                                  icon: null
                                              }
                                          ]
                                      }
                                  ]
                              },
                              {
                                  idSection: 222,
                                  title: "Name of an Empty Section",
                                  isActive: 1,
                                  pictureUrl: null,
                                  order: 2,
                                  itemsList: []
                              }
                          ]
                      }
                  ]
              }
          ],
    };
  }
  render() { 
    const { classes } = this.props;
      const { className, onSidebarOpen, ...rest } = this.props;
      const [value, setValue] = React.useState(0);
    
      const handleChange = (event, newValue) => {
        setValue(newValue);
      };

  return (
    <Grid container xs={12} align='center'>
      <AppBar style={{position:'static'}}>
        <toolbar>
      <Grid container xs={12} justify='space-between' style={{paddingTop:'4vh',background:'rgb(248, 243, 239)'}}>
        <Grid item xs={2}>
          <Typography style={{marginLeft:'-2vh',fontSize:'14px',color:'rgb(134, 113, 95)',fontFamily:'Montserrat'}}>
            ENG
          </Typography>
        </Grid>
        <Grid item xs={5} style={{}} align='left'>
          <Typography className={classes.Restaurant} style={{paddingLeft:'1vh'}}>
            RESTAURANT
          </Typography>
        </Grid>
        <Grid item xs={2} style={{marginTop:'-1.5vh',paddingLeft:'2vh'}} align='left'>
          <IconButton>
            <ShareIcon style={{fontSize:'20px',color:'rgb(134, 113, 95)',marginRight:'0vh'}}/>
          </IconButton>
        </Grid>
        <div className={classes.root} style={{marginTop:'4vh'}}>
        <toolbar position="static" style={{background:"rgb(248, 243, 239)",marginTop:'2vh'}} >
        <Tabs
        style={{background:'rgb(248, 243, 239)'}}
          value={this.state.tabValue}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          
          indicatorColor="rgb(134, 113, 95)"
          centered = "true"
          aria-label="scrollable force tabs example"
        >
          <Tab label="DRINKS" style={{width:'100px',paddingLeft:'1vh',paddingRight:'7vh'}} />
          <Tab label="PIZZA" style={{width:'100px',paddingRight:'4vh'}} />
          <Tab label="BURGER" style={{width:'100px'}} />
          <Tab label="DESSERT" style={{width:'100px',paddingRight:'6vh'}} />
          <Tab label="FISH" style={{width:'100px',paddingRight:'4vh'}} />
          <Tab label="STEAK" style={{width:'100px'}} />
        </Tabs>
      </toolbar>
      </div>
      </Grid>
      </toolbar>
      
      </AppBar>

    <Grid container xs={12} align='center'>
      <Grid container xs={12} style={{marginTop:'5vh'}}>
        <Grid item xs={12}>

          {this.state.menusList[0].categoriesList[0].sectionsList.map(section => (
            <Card className={classes.Card}>
              <CardContent>
                <Grid container xs={12}>
                  <Grid item xs={12}>
                    <Grid item xs={1} style={{marginLeft:'-3vh'}}/>
                      <Grid container xs={12} align='left' style={{marginLeft:'1vh'}}>
                        <Grid item xs={3}>
                          <Typography className={classes.Heading}>{section.title.toUpperCase()}</Typography>
                        </Grid>
                      
                        {section.itemsList.map(item => (
                          <Grid container xs={12} style={{marginTop:'3.9vh'}} justify='space-between' align='left'>
                            <Grid container xs={9}>
                              <Grid item xs={12} align='left'>
                                <Typography className={classes.subHeading}>{item.title}</Typography>
                                 
                                
                              </Grid>
                              <Grid item xs={12} align='left'>
                                <Typography className={classes.Ingredients}>{item.details}</Typography>
                              </Grid>
                              <Grid item xs={12} align='left'>
                              
                                {item.Icons.map(icon => {
                                  if(icon ==1)
                                  return(
                                  <FaPizzaSlice style={{marginRight:'1vh',color:'rgba(113,112,94,1)',fontSize:'12px'}}/>)
                                  if(icon ==2)
                                  return(
                                  <FaFish style={{marginRight:'1vh', color:'rgba(113,112,94,1)',fontSize:'15px'}}/>)
                                  if(icon==3)
                                  return(
                                  <FaLeaf style={{color:'rgba(113,112,94,1)',fontSize:'14px',lineHeight:'20px'}}/>)
                                  
                                  if(icon==10)
                                  return(
                                    <Grid item xs={12} align='center' justify='center'cstyle={{marginTop:'2vh',paddingLeft:'4vh'}}>
                                      <div style={{width:'20vh',marginLeft:'4vh',marginTop:'1vh',textAlign:'center',height:'.24vh',background:'rgb(113,112,94,.4)'}}/>
                                    </Grid>
                                  )
                                
                                })}
                                
                              </Grid>                              
                            </Grid>
                            
                            <Grid container justify="flex-start" xs={3}>
                              {item.pricesList.map(price => (
                                <Grid item xs={12}>
                                  <Typography style={{fontSize:'11px',lineHeight:'11px'}} className={classes.PizzaSize}>{price.unit.substring(0,1)}</Typography>
                                  <Typography style={{fontSize:'11px'}} className={classes.Price}>{this.state.menusList[0].currency}{price.price}</Typography>
                                </Grid>
                              ))}
                            </Grid>
                          </Grid>
                        ))}
                      </Grid>
                        
                    </Grid>
                  </Grid>
            </CardContent>
          </Card>

                      ))}

            </Grid> 
        </Grid>
      </Grid>
    </Grid>
  );
  }
};
Landingpage.propTypes = {
  className: PropTypes.string
};

export default withStyles(styles)(Landingpage)

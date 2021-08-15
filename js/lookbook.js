
/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'rawgnarly.myshopify.com',
      storefrontAccessToken: 'b418411c58a86bef131a53bd0a38133b',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '4250212499490',
        node: document.getElementById('product-component-1572039548996'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"

        }
      },
      "button": {
        "font-family": "Lato, sans-serif",
        "font-weight": "bold",
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px",
        "color": "#f28888",
        ":hover": {
          "color": "#f28888",
          "background-color": "#0000da"
        },
        "background-color": "#000080",
        ":focus": {
          "background-color": "#0000da"
        },
        "border-radius": "31px",
        "padding-left": "29px",
        "padding-right": "29px"
      },
      "quantityInput": {
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px"
      }
    },
    "contents": {
      "img": false,
      "title": false,
      "price": false
    },
    "text": {
      "button": "Add to cart"
    },
    "googleFonts": [
      "Lato"
    ]
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-family": "Lato, sans-serif",
        "font-weight": "bold",
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px",
        "color": "#f28888",
        ":hover": {
          "color": "#f28888",
          "background-color": "#0000da"
        },
        "background-color": "#000080",
        ":focus": {
          "background-color": "#0000da"
        },
        "border-radius": "31px",
        "padding-left": "29px",
        "padding-right": "29px"
      },
      "quantityInput": {
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px"
      }
    },
    "googleFonts": [
      "Lato"
    ],
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {
    "styles": {
      "label": {
        "font-size": "15px",
        "color": "#1d1e7c"
      }
    }
  },
  "cart": {
    "styles": {
      "button": {
        "font-family": "Lato, sans-serif",
        "font-weight": "bold",
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px",
        "color": "#f28888",
        ":hover": {
          "color": "#f28888",
          "background-color": "#0000da"
        },
        "background-color": "#000080",
        ":focus": {
          "background-color": "#0000da"
        },
        "border-radius": "31px"
      }
    },
    "text": {
      "total": "Subtotal",
      "empty": "Nothing to see.",
      "button": "Checkout"
    },
    "googleFonts": [
      "Lato"
    ]
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-family": "Lato, sans-serif",
        "font-weight": "bold",
        "background-color": "#000080",
        ":hover": {
          "background-color": "#0000da"
        },
        ":focus": {
          "background-color": "#0000da"
        }
      },
      "count": {
        "font-size": "16px",
        "color": "#f28888",
        ":hover": {
          "color": "#f28888"
        }
      },
      "iconPath": {
        "fill": "#f28888"
      }
    },
    "googleFonts": [
      "Lato"
    ]
  }
},
      });
    });
  }
})();
/*]]>*/
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    margin:4,
    loop:true,
    pagination:true,
    dots: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:5
        }
    },
    nav:true,
		 navText: ['<i class="mobile-only-scroll-tag fa fa-angle-left fa-2x" style="outline:none;text-align:left;"></i>','<i class="mobile-only-scroll-tag fa fa-angle-right fa-2x"  ></i>']

  });
});

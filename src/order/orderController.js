import axios from 'axios';

export async function checkShopifyApiLimit(
  url,
  method,
  options = {},
  data = null,
) {
  let limitExecced = true;
  let response;
  while (limitExecced) {
    try {
      const res = await axios.request({
        url,
        method,
        headers: options.headers,
        data,
      });
      limitExecced = false;
      const rateLimit = res.headers['x-shopify-shop-api-call-limit']
        ? res.headers['x-shopify-shop-api-call-limit'].split('/')
        : 0;
      if (parseInt(rateLimit[0]) >= parseInt(rateLimit[1]) - 5) {
        response = res;
        await new Promise(resolve => {
          setTimeout(resolve, 2000);
        });
      } else {
        response = res;
      }
    } catch (error) {
      if (error && error.response && error.response.status === 429) {
        limitExecced = true;
        await new Promise(resolve => {
          setTimeout(resolve, 2000);
        });
      } else {
        limitExecced = false;
        throw error;
      }
    }

    // await axios.request({
    //   url: url,
    //   method: method,
    //   headers: options.headers,
    //   data: data
    // })
    // .then(res => {
    //   limitExecced = false;
    //   const rateLimit = res.headers["x-shopify-shop-api-call-limit"] ? res.headers["x-shopify-shop-api-call-limit"].split("/") : 0;
    //   console.log("rateLimit", rateLimit);
    //   if(parseInt(rateLimit[0]) >=  (parseInt(rateLimit[1]) - 5)) {
    //     setTimeout(() => {
    //       console.log("waited 2 seconds");
    //       response = res;
    //     }, 2000);
    //   } else {
    //     response = res;
    //   }
    // })
    // .catch(error => {
    //   if(error && error.response && error.response.status === 429) {
    //     console.log("429 error from shopify api limit");
    //     limitExecced = true;
    //     return new Promise((resolve) => {
    //       console.log("waited 2 seconds in catch part")
    //       setTimeout(resolve, 2000);
    //     });
    //   } else {
    //     limitExecced = false;
    //     throw error;
    //   }
    // });
  }
  return response;

  //   return new Promise((resolve, reject) => {
  //     axios.request({
  //       url: url,
  //       method: method,
  //       headers: options.headers,
  //       data: data
  //     })
  //     .then(res => {
  //       const rateLimit = res.headers["x-shopify-shop-api-call-limit"] ? res.headers["x-shopify-shop-api-call-limit"].split("/") : 0;
  //       console.log("rateLimit", rateLimit);
  //       if(parseInt(rateLimit[0]) >=  (parseInt(rateLimit[1]) - 5)) {
  //         setTimeout(() => {
  //           console.log("waited 2 seconds");
  //           return resolve({ data: res.data });
  //         }, 2000);
  //       } else {
  //         return resolve({ data: res.data });
  //         // if(error && error.response && error.response.status === 429) {
  //         //   console.log("failed");
  //         //   const retryAfter =  error.response.headers["retry-after"];
  //         //   console.log("timer", parseInt(retryAfter) * 1000);
  //         //   console.log("retryAfter", error.response.headers["retry-after"])
  //         //   console.log("HTTP_X_SHOPIFY_SHOP_API_CALL_LIMIT", error.response.headers["http_x_shopify_shop_api_call_limit"])
  //         //   console.log("X-Shopify-Shop-Api-Call-Limit", error.response.headers["x-shopify-shop-api-call-limit"])
  //         //   setTimeout(() => {
  //         //     console.log("inside timeout")
  //         //     return fetchRetry(url, options);
  //         //   }, ((parseInt(retryAfter) || 2) * 1000));
  //         // } else {
  //         //   return reject(new Error(error));
  //         // }
  //       }
  //     })
  //     .catch(error => {
  //       if(error && error.response && error.response.status === 429) {
  //         logger.error(`429 error from shopify api limit`, {
  //           url: url
  //         });
  //       }
  //       return reject(error);
  //     });
  // });
}

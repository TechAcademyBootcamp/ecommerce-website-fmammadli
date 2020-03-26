$(document).ready(function(){
    const back_end_domain = 'http://35.225.243.133'

    $.ajax({
        url: `${back_end_domain}/api/products/`,
        method: 'GET',
        success: function(result){
            // console.log(result);
            for(var product of result){
                if(product.discount_price === null){
                    $('#row').append(`<div class="col-lg-3 col-md-3 col-sm-6 col-6">
                <div class="card-image">
                    <img class="card-img-top" src="${product.main_image}" draggable="false" alt="Card image cap" class="product-image"style="position:relative">
                    </div>

                    <div class="card-body" style="padding: 20px 25px 30px;">
                      <h3 class="card-title">${product.title}</h3>
                      <span class="product-weight">${product.unit}</span>
                      <div class="below_title">
                      <div class="productPriceWrapper">
                        <span class="product-price cc_pointer">${product.price}</span>
                        <button type="button" class="Buttonstyle__ButtonStyle reusecore__button cart-button cc_pointer button_products"><span class="btn-icon"><svg xmlns="http://www.w3.org/2000/svg" width="14.4" height="12" viewBox="0 0 14.4 12"><g data-name="Group 120" transform="translate(-288 -413.89)"><path data-name="Path 154" fill="currentColor" d="M298.7,418.289l-2.906-4.148a.835.835,0,0,0-.528-.251.607.607,0,0,0-.529.251l-2.905,4.148h-3.17a.609.609,0,0,0-.661.625v.191l1.651,5.84a1.336,1.336,0,0,0,1.255.945h8.588a1.261,1.261,0,0,0,1.254-.945l1.651-5.84v-.191a.609.609,0,0,0-.661-.625Zm-5.419,0,1.984-2.767,1.98,2.767Zm1.984,5.024a1.258,1.258,0,1,1,1.319-1.258,1.3,1.3,0,0,1-1.319,1.258Zm0,0"></path></g></svg></span>
                        <span class="btn-text" style="padding: 0px 0px 0px 6px;">Cart</span>
                      </button>
                    </div>
                    </div>
                  </div>
            </div>`);
                }
                else{
                $('#row').append(`<div class="col-lg-3 col-md-3 col-sm-6 col-6">
                <div class="card-image">
                    <img class="card-img-top" src="${product.main_image}" draggable="false" alt="Card image cap" class="product-image"style="position:relative">
                    <span class="ProductCardstyle__DiscountPercent-g295im-3 dp-percentage">${Math.ceil((product.discount_price)/product.price*100)+"%"}</span>
                    </div>

                    <div class="card-body" style="padding: 20px 25px 30px;">
                      <h3 class="card-title">${product.title}</h3>
                      <span class="product-weight">${product.unit}</span>
                      <div class="below_title">
                      <span class="discountedPrice cc_pointer">${product.price - product.discount_price}</span>
                      <div class="productPriceWrapper">
                      
                        <span class="product-price cc_pointer">${product.price}</span>
                        
                        <button type="button" class="Buttonstyle__ButtonStyle reusecore__button cart-button cc_pointer button_products"><span class="btn-icon"><svg xmlns="http://www.w3.org/2000/svg" width="14.4" height="12" viewBox="0 0 14.4 12"><g data-name="Group 120" transform="translate(-288 -413.89)"><path data-name="Path 154" fill="currentColor" d="M298.7,418.289l-2.906-4.148a.835.835,0,0,0-.528-.251.607.607,0,0,0-.529.251l-2.905,4.148h-3.17a.609.609,0,0,0-.661.625v.191l1.651,5.84a1.336,1.336,0,0,0,1.255.945h8.588a1.261,1.261,0,0,0,1.254-.945l1.651-5.84v-.191a.609.609,0,0,0-.661-.625Zm-5.419,0,1.984-2.767,1.98,2.767Zm1.984,5.024a1.258,1.258,0,1,1,1.319-1.258,1.3,1.3,0,0,1-1.319,1.258Zm0,0"></path></g></svg></span>
                        <span class="btn-text" style="padding: 0px 0px 0px 6px;">Cart</span>
                      </button>
                    </div>
                    </div>
                  </div>
            </div>`);
                }
            }
        },
        error: function(error){
            alert('error')
        }
    })
});


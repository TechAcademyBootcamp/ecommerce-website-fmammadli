var button_products = document.getElementById('button_products');
button_products.addEventListener('click', function(event){
    event.preventDefault();
    const back_end_domain = 'http://35.225.243.133'


    $.ajax({
        url: `${back_end_domain}/api/products/`,
        method: 'GET',
        success: function(result){
            // console.log(result);
            for(var product of result){
                if(product.discount_price === null){
                    $('#noProductsFound').append(`<div class="CartItemCardstyle__ItemWrapper">
                    <div class="CartItemCardstyle__ItemCards">
                      <div class="InputIncDecstyle__InputIncDecWrapper quantity_vertical" style="margin-right: 15px;">
                        <button class="btn incBtn"><svg xmlns="http://www.w3.org/2000/svg" width="12px" height="12px" viewBox="0 0 12 12"><g id="Group_3351" data-name="Group 3351" transform="translate(-1367 -190)"><rect data-name="Rectangle 520" width="12" height="2" rx="1" transform="translate(1367 195)" fill="currentColor"></rect><rect data-name="Rectangle 521" width="12" height="2" rx="1" transform="translate(1374 190) rotate(90)" fill="currentColor"></rect></g></svg>
                        </button>
                        <input class="qnt-input" type="number" readonly="" value="2">
                        <button class="btn decBtn"><svg xmlns="http://www.w3.org/2000/svg" width="12px" height="2px" viewBox="0 0 12 2"><rect data-name="Rectangle 522" width="12" height="2" rx="1" fill="currentColor"></rect></svg>
                        </button>
                      </div>
                        <div class="CartItemCardstyle__ItemImgWrapper">
                          <img class="ListImage" src="" height="150" width="150"></div>
                        <div class="CartItemCardstyle__ItemDetails" style="display: inline-flex; flex-direction: column">
                          <span class="CartItemCardstyle__ItemTitle"></span>
                          <span class="CartItemCardstyle__ItemPrice"></span>
                          <span class="CartItemCardstyle__ItemWeight"></span>
                        </div>
                        <span class="CartItemCardstyle__TotalPrice"></span>
                        <button class="CartItemCardstyle__DeleteButton"><svg xmlns="http://www.w3.org/2000/svg" width="10.003" height="10" viewBox="0 0 10.003 10"><path data-name="_ionicons_svg_ios-close (5)" d="M166.686,165.55l3.573-3.573a.837.837,0,0,0-1.184-1.184l-3.573,3.573-3.573-3.573a.837.837,0,1,0-1.184,1.184l3.573,3.573-3.573,3.573a.837.837,0,0,0,1.184,1.184l3.573-3.573,3.573,3.573a.837.837,0,0,0,1.184-1.184Z" transform="translate(-160.5 -160.55)" fill="currentColor"></path></svg>
                        </button>
                      </div>
                    </div>
            
                    `



    
        
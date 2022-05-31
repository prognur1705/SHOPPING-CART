
function handleProductChange(product, isIncrease){

      const productInput = document.getElementById(product);
      const productCount = perseInt (productInput.value) ;
      const newProductCount = productCount;

      if( isIncrease == true ) {
          newProductCount = productCount + 1;
      }
      if(isIncrease == false && productCount > 0) {
          newProductCount = product - 1 ;
      }

     productInput.value = newProductCount ;
        let productTotal ;

        if( product == "laptop"){
            productTotal =newProductCount * 120000;
        }
        else{
            productTotal = newProductCount * 300;
        }
        document.getElementById(product + "-Total").innerHTML=productTotal;


}
handleProductChange();
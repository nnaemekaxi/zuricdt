        let cardNum1 = document.getElementById("cardNumber1");
        let cardNum2 = document.getElementById("cardNumber2");
        let cardNum3 = document.getElementById("cardNumber3");
        let cardNum4 = document.getElementById("cardNumber4");
        let cardHolder = document.getElementById("cardHolder");
        let holderName = document.getElementById("holderName");
        let expiryDate = document.getElementById("expiryDate");
        let month = document.getElementById("month");
        let year = document.getElementById("year");
        let ccv = document.getElementById("ccv");
        let cardImg = document.getElementById("cardImg");
        let validateAllInputs = document.getElementById("validateAllInputs");

        cardNum1.addEventListener('input', (event)=>{
            const Value = event.target.value; 
            const validateNum = Value.replace(/[^0-9]/g, ''); 
            event.target.value = validateNum; 
            switch (cardNum1.value[0]) {
                case '2':
                    cardImg.setAttribute('src', './master.webp')
                    cardImg.style = `width: 80px; height:40px`
                    break;
                case '5':
                    cardImg.setAttribute('src', './master.webp')
                    cardImg.style = `width: 80px; height:40px`
                    break;
                case '4':
                    cardImg.setAttribute('src', './visa.webp')
                    cardImg.style = `width: 70px; height:30px`
                    break;
                case '3':
                cardImg.setAttribute('src', './american.svg')
                cardImg.style = `width: 90px; height:60px`
                    break;
                default:
                    break;
            }
            if(cardNum1.value.length ===4){cardNum2.focus()}})
        cardNum2.addEventListener('input', (event)=>{const Value = event.target.value; const validateNum = Value.replace(/[^0-9]/g, ''); event.target.value = validateNum; if(cardNum2.value.length ===4){cardNum3.focus()}})
        cardNum3.addEventListener('input', (event)=>{const Value = event.target.value; const validateNum = Value.replace(/[^0-9]/g, ''); event.target.value = validateNum; if(cardNum3.value.length ===4){cardNum4.focus()}})
        cardNum4.addEventListener('input', (event)=>{
            const Value = event.target.value; 
            const validateNum = Value.replace(/[^0-9]/g, ''); 
            event.target.value = validateNum; 
            })
        
        cardHolder.oninput = () =>{holderName.innerHTML = cardHolder.value};
        month.onchange = () => {expiryDate.innerHTML = month.value + "-" + year.value }
        year.onchange = () => {expiryDate.innerHTML = month.value + "-" + year.value }
        ccv.addEventListener('input', (event)=>{
            const Value = event.target.value; 
            const validateNum = Value.replace(/[^0-9]/g, ''); 
            event.target.value = validateNum; 
        })

        validateAllInputs.addEventListener('submit', (e) =>{
                e.preventDefault();
            if((cardNum1.value.length < 4) || (cardNum2.value.length < 4) || (cardNum3.value.length < 4) || (cardNum4.value.length < 4)){
                alert("Card number must be at least 16 numbers");
                return false;
            } else if(!month || !year){
                alert("Expiry date field must be filled");
                return false;
            } else if (cardHolder){
                const checks = cardHolder.value.split(/\s+/);
                if (checks.length < 2){
                    alert("Customer's name must include first and last names")
                }    
            }else if (ccv.value.length < 3 || ccv.value.length > 4){
                alert("CCV must be either 3 or 4 numbers")
                return false;
            }  else if((cardNum1.value[0] >= 2) || (cardNum1.value[0] <= 5)){
                alert("Invalid Card Number")
            } else {
                const cardNumber = cardNum1.value + cardNum2.value + cardNum3.value + cardNum4.value;
                const holdersName = cardHolder.value;
                const expirationDate = month.value + "-" + year.value;
                const CCV = ccv.value;
                alert("Payment successful");
            }
        })

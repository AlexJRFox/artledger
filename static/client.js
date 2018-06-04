
const totalButton = document.getElementById("subButton");
const totalResult = document.getElementById("total");
const invoiceButton = document.getElementById("invoiceButton");
const artQuestionnaire = document.getElementById("questionnaire");

let description = "";
let clientAddress = "";
let myAddress = "";



const prices = {
  painting: {
    small: 65,
    medium: 150,
    large: 200
  },
  drawing: {
    small: 50,
    medium: 65,
    large: 120
  },
  print:   {
    small: 40,
    medium: 80,
    large: 100
  }
}

const expLevels = {
   student: 1,
   emerging: 2,
   "mid-career": 3
}


let totalPrice = 0;

//=[];

const showTotal = function(e) {
e.preventDefault();

  let dayNumber = document.getElementById("numberDays").value;
  let typeOfWork = document.querySelector('input[name="workType"]:checked').id;
  let sizeOfWork = document.querySelector('input[name="workSize"]:checked').id;
  let expLevel = document.querySelector('input[name="expLevel"]:checked').id;

  let priceOfWork = prices[typeOfWork][sizeOfWork];
  let experienceLevel = expLevels[expLevel];

  totalPrice = calculatePrice(priceOfWork,dayNumber,experienceLevel);


  totalResult.value = totalPrice;
};

function calculatePrice(priceOfWork,dayNumber,experienceLevel){
  return priceOfWork * dayNumber * experienceLevel

}

function getPDF(){
  description = document.getElementById("itemDescription").value;
  clientAddress = document.getElementById("clientAddress").value;
  myAddress = document.getElementById("myAddress").value;
  total = document.getElementById("total").value;
  console.log(description, clientAddress, myAddress, total);
  printPage();

}

// let totalValue = calculatePrice(total);
//
// document.getElementById("preValue").innerHTML=totalValue;


totalButton.addEventListener("click",showTotal);


const invoicePage = function(x){
  x.preventDefault();

  // let spanContentNode = document.createElement("span");
  // let textNode = document.createTextNode("hello");
  // spanContentNode.appendChild(textNode);


  artQuestionnaire.innerHTML = `
  <form>
  <div class="form-group">
  <label for="exampleFormControlTextarea1">Description of work</label>
  <textarea class="form-control" id="itemDescription" rows="3"></textarea>
  </div>
  <div class="form-group">
  <label for="exampleFormControlTextarea1">Client Address</label>
  <textarea class="form-control" id="clientAddress" rows="3"></textarea>
  </div>
  <div class="form-group">
  <label for="exampleFormControlTextarea1">Your Address</label>
  <textarea class="form-control" id="myAddress" rows="3"></textarea>
  </div>
  <div> <label>Total: £ <input type="text" name="total" class="num" size="6" value="${totalPrice}" readonly="readonly" id="total"/></label></div>
  </form>
  <div><button id="invoicePDFButton" class="buttonPDF" type="submit">Create PDF</button></div>

  `;

  const invoicePDFButton = document.getElementById("invoicePDFButton");

  invoicePDFButton.addEventListener("click",getPDF);


  // artQuestionnaire.appendChild(spanContentNode);

};

invoiceButton.addEventListener("click",invoicePage);

const printPage = function(){


  // let spanContentNode = document.createElement("span");
  // let textNode = document.createTextNode("hello");
  // spanContentNode.appendChild(textNode);


  artQuestionnaire.innerHTML = `
  <h2>Description of Work</h2>
	<p id="enterDescription"></p>
  <h2>Client Address</h2>
	<p id="enterClientAddress"></p>
<h2>Artist's Address</h2>
	<p id="enterArtistAddress"></p>
	<h2>Work Certified to the Value of</h2>
	  <p id="total"></p>
	  <span></span>
	  <p>T&Cs</p>

	  <a id="print" href="">Print Certificate</a>
  `;

  document.getElementById("enterDescription").textContent = description;
  document.getElementById("enterClientAddress").textContent = clientAddress;
  document.getElementById("enterArtistAddress").textContent = myAddress;
  document.getElementById("total").textContent = totalPrice;
  // const invoicePDFButton = document.getElementById("invoicePDFButton");
  //
  // invoicePDFButton.addEventListener("click",getPDF);
  const print = document.getElementById("print");

  print.addEventListener("click",window.print());

  // artQuestionnaire.appendChild(spanContentNode);

};
//
// invoiceButton.addEventListener("click",printPage);

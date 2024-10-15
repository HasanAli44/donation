const donation = () => {
  const donation = document.getElementById("history");
  donation.classList.add("hidden");
  const history = document.getElementById("donation");
  history.classList.remove("hidden");

  //   donation button  style add
  const donationBtn = document.getElementById("donation-btn");
  donationBtn.classList =
    "bg-[#B4F461] text-white font-semibold w-[150px] h-[49px] rounded-xl";
  const historyBtn = document.getElementById("history-btn");
  historyBtn.classList = "border-2 font-semibold w-[150px] h-[49px] rounded-xl";
};

const history = () => {
  const history = document.getElementById("donation");
  history.classList.add("hidden");
  const donation = document.getElementById("history");
  donation.classList.remove("hidden");

  //   history button style add
  const donationBtn = document.getElementById("donation-btn");
  donationBtn.classList =
    "border-2 font-semibold w-[150px] h-[49px] rounded-xl";
  const historyBtn = document.getElementById("history-btn");
  historyBtn.classList =
    "bg-[#B4F461] text-white font-semibold w-[150px] h-[49px] rounded-xl";
};

let count = 0;
const donationNow = () => {
  const inputField = document.getElementById("input-field").value;
  const totalAmount = document.getElementById("total-amount");
  let newAmount = parseInt(inputField) + parseInt(count);
  count = newAmount;
  totalAmount.innerText = newAmount;

  let donationAmount = parseInt(
    document.getElementById("donation-amount").innerText
  );
  let newDonation = donationAmount - inputField;

  document.getElementById("donation-amount").innerText = newDonation;

  const history = document.getElementById("history");
  const card = document.createElement("div");
  card.classList = "border p-5 px-10 rounded-xl mt-10";
  const tittle = event.target.parentNode.querySelector("h4").innerText;
  card.innerHTML = `
  <h2 class="font-bold">
        ${count} Taka is ${tittle}
        </h2>
        <p class="pt-3">
          Date : ${new Date()}
        </p>
      </div>
  `;
  history.appendChild(card);
};

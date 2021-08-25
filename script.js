const Data = [
  {
    id: 12,
    name: "Zulfikar Istyanto",
    check: "12-02-2021 - 12-02-2020",
    asGuest: "Someone Guest",
    breakfast: "Without Breakfast",
    no: "083128383128",
    email: "zulfikar.zfi@gmail.com",
    addOn: "Connecting Room, Adding Bed, Smooking Room, High Floor",
    address: "Jl. Pirus Asrama Type K Dalam Blok A No 2",
    isConfirm: false,
  },
];

const New = () => {
  let form = "";

  form += `
    <section class="form-input" id="bg">
    <div class="title">
          <h2>Hotel Booking</h2>
        </div>
        <div class="form">
          <!-- Name Input -->
          <div class="left">
            <div class="name-input">
              <div class="firstName">
                <label for="first-name">First Name <span>*</span></label>
                <input
                  type="text"
                  id="first-name"
                  placeholder="Input your first name"
                />
              </div>
              <div class="lastName">
                <label for="last-name">Last Name <span>*</span></label>
                <input
                  type="text"
                  id="last-name"
                  placeholder="Input your last name"
                />
              </div>
            </div>

            <!-- Check In - Check out -->
            <div class="check-in-out">
              <div class="check-in">
                <label for="in">Check In <span>*</span></label>
                <input type="date" name="" id="in" />
              </div>
              <div class="check-out">
                <label for="out">Check Out <span>*</span></label>
                <input type="date" name="" id="out" />
              </div>
            </div>

            <!-- Booking For -->
            <div class="booking">
              <div class="guest-input">
                <input
                  type="radio"
                  id="guest"
                  value="Guest"
                  name="book"
                  checked
                />
                <label for="guest">I'm a Guest</label>
              </div>
              <div class="another-input">
                <input
                  type="radio"
                  id="another"
                  value="Another Person"
                  name="book"
                />
                <label for="another">I'm booking for another person</label>
              </div>
            </div>

            <!-- Breakfast -->
            <div class="breakfast-select">
              <label for="bf">Breakfast <span>*</span></label>
              <select id="bf">
                <option value="Breakfast">BreakFast</option>
                <option value="Without BreakFast">Without BreakFast</option>
              </select>
            </div>
          </div>

          <div class="right">
            <!-- Email and mobile number -->
            <div class="row">
              <!-- Mobile Number -->
              <div class="mobile">
                <label for="number">Mobile Number <span>*</span></label>
                <input
                  type="number"
                  name="num"
                  id="number"
                  placeholder="XXX-XXX-XXX"
                />
              </div>

              <!-- Email -->
              <div class="email">
                <label for="mail">Email <span>*</span></label>
                <input
                  type="email"
                  name="mails"
                  id="mail"
                  placeholder="Input your email"
                />
              </div>
            </div>

            <!-- Add on -->
            <div class="add-on">
              <div class="box-left">
                <div class="cb1">
                  <input
                    type="checkbox"
                    name="cb1"
                    id="smoking"
                    value="Smoking Room"
                  />
                  <label for="smoking">Smooking Room</label>
                </div>
                <div class="cb2">
                  <input
                    type="checkbox"
                    name="cb2"
                    id="floor"
                    value="High Floor"
                  />
                  <label for="floor">High Floor</label>
                </div>
              </div>
              <div class="box-right">
                <div class="cb3">
                  <input
                    type="checkbox"
                    name="cb3"
                    id="connect"
                    value="Connecting Room"
                  />
                  <label for="connect">Connecting Room</label>
                </div>
                <div class="cb4">
                  <input
                    type="checkbox"
                    name="cb4"
                    id="bed"
                    value="Adding Bed"
                  />
                  <label for="bed">Adding a bed</label>
                </div>
              </div>
            </div>

            <!-- Address -->
            <div class="address-box">
              <label for="address">Address <span>*</span></label>
              <textarea
                name="add-box"
                id="address"
                cols="30"
                rows="10"
                placeholder="Input your address"
              ></textarea>
            </div>
            <!-- Button -->
            <div class="btn-input">
              <button class="btn" onclick="Add()">Continue</button>
            </div>
          </div>
        </div>
      </section>
      `;

  document.getElementById("pending").innerHTML = form;
};

document.getElementById("add").addEventListener("click", New);

const Add = () => {
  let firstName = document.getElementById("first-name").value;
  let lastName = document.getElementById("last-name").value;
  let checkIn = document
    .getElementById("in")
    .value.split("-")
    .reverse()
    .join("-");
  let checkOut = document
    .getElementById("out")
    .value.split("-")
    .reverse()
    .join("-");
  let asGuestTrue = document.getElementById("guest").checked;
  let asGuest = document.getElementById("guest").value;
  let asAnother = document.getElementById("another").value;
  let breakFast = document.getElementById("bf").value;
  let mobileNum = document.getElementById("number").value;
  let eMail = document.getElementById("mail").value;
  let smokeRoom = document.getElementById("smoking").value;
  let highFloor = document.getElementById("floor").value;
  let connectRoom = document.getElementById("connect").value;
  let addBed = document.getElementById("bed").value;
  let address = document.getElementById("address").value;

  //   checked
  let smokeRoomTrue = document.getElementById("smoking").checked;
  let highFloorTrue = document.getElementById("floor").checked;
  let connectRoomTrue = document.getElementById("connect").checked;
  let addBedTrue = document.getElementById("bed").checked;

  function cb() {
    let result = "";
    if (smokeRoomTrue) {
      result += smokeRoom + ",";
    }
    if (highFloorTrue) {
      result += highFloor + ",";
    }
    if (connectRoomTrue) {
      result += connectRoom + ",";
    }
    if (addBedTrue) {
      result += addBed;
    }

    return result.split(",").join(",");
  }

  let addObj = {
    id: Date.now(),
    name: firstName + " " + lastName,
    check: checkIn + "-" + checkOut,
    asGuest: asGuestTrue ? asGuest : asAnother,
    breakfast: breakFast,
    no: mobileNum,
    email: eMail,
    addOn: cb(),
    address: address,
  };

  Data.push(addObj);

  display();
};

const onDelete = (id) => {
  for (var i = 0; i < Data.length; i++) {
    if (Data[i].id === id) {
      Data.splice(i, 1);
    }
  }
  display();
};

const onDone = (i) => {
  Data[i].isConfirm = true;
  display();
};

const display = () => {
  let cardConf = "";
  let cardPend = "";

  for (let i = 0; i < Data.length; i++) {
    let id = Data[i].id;
    let name = Data[i].name;
    let date = Data[i].check;
    let asGuest = Data[i].asGuest;
    let breakfast = Data[i].breakfast;
    let no = Data[i].no;
    let email = Data[i].email;
    let addOn = Data[i].addOn;
    let address = Data[i].address;
    var isConfirm = Data[i].isConfirm;
    isConfirm
      ? (cardConf += `
    <div class="card card-confirm">
          <div class="label-confirm"><span>Name :</span> ${name}</div>
          <div class="label-confirm"><span>Check :</span> ${date}</div>
          <div class="label-confirm"><span>as Guest :</span> ${asGuest}</div>
          <div class="label-confirm"><span>Breakfast :</span> ${breakfast}</div>
          <div class="label-confirm"><span>No :</span> ${no}</div>
          <div class="label-confirm"><span>Email :</span> ${email}</div>
          <div class="label-confirm">
            <span>Add On :</span>
            ${addOn}
          </div>
          <div class="label-confirm">
            <span>Address :</span>
            ${address}
          </div>
          <div class="box-btn">
            <button class="cancel" onclick="onDelete(${id})">Delete</button>
          </div>
        </div>
    `)
      : (cardPend += `
    <div class="card">
          <div class="prop"><span>Name :</span> ${name}</div>
          <div class="prop"><span>Check :</span> ${date}</div>
          <div class="prop"><span>as Guest :</span> ${asGuest}</div>
          <div class="prop"><span>Breakfast :</span> ${breakfast}</div>
          <div class="prop"><span>No :</span> ${no}</div>
          <div class="prop"><span>Email :</span> ${email}</div>
          <div class="prop">
            <span>Add On :</span>
            ${addOn}
          </div>
          <div class="prop">
            <span>Address :</span>
            ${address}
          </div>
          <div class="box-btn">
            <button class="cancel" onclick="onDelete(${id})">Delete</button>
            <button class="conf" onclick="onDone(${i})">Confirm</button>
          </div>
        </div>
    `);
  }

  document.getElementById("pending").innerHTML = cardPend;
  document.getElementById("confirmed").innerHTML = cardConf;
};

display();

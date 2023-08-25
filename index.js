const dailyBtn = document.querySelector(".dailyBtn");
const weeklyBtn = document.querySelector(".weeklyBtn");
const monthlyBtn = document.querySelector(".monthlyBtn");
const reportContainer = document.querySelector(".report__container");

getDailyData();

dailyBtn.addEventListener("click", getDailyData);
weeklyBtn.addEventListener("click", getWeeklyData);
monthlyBtn.addEventListener("click", getMonthlyData);

function getDailyData() {
  try {
    reportContainer.innerHTML = "";

    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        data.forEach((value) => {
          const title = value.title;
          const reportCard = document.createElement("div");
          reportCard.classList.add("report__card");
          reportCard.innerHTML = `
            <img src="./images/icon-${title
              .toLowerCase()
              .replace(" ", "-")}.svg" alt="">
            <div class="report__details">
                <div class="report__header">
                    <h2>${title}</h2>
                    <img src="./images/icon-ellipsis.svg" alt="">
                </div>
                <div class="report__body">
                    <p class="current__hours">${
                      value.timeframes.daily.current
                    }hrs</p>
                    <p class="prev__hours">Yesterday - ${
                      value.timeframes.daily.previous
                    }hrs</p>
                </div>
            </div>
          `;

          reportContainer.appendChild(reportCard);
        });
      });
  } catch (error) {
    console.log(error);
  }
}

function getWeeklyData() {
  try {
    reportContainer.innerHTML = "";

    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        data.forEach((value) => {
          const title = value.title;
          const reportCard = document.createElement("div");
          reportCard.classList.add("report__card");
          reportCard.innerHTML = `
            <img src="./images/icon-${title
              .toLowerCase()
              .replace(" ", "-")}.svg" alt="">
            <div class="report__details">
                <div class="report__header">
                    <h2>${title}</h2>
                    <img src="./images/icon-ellipsis.svg" alt="">
                </div>
                <div class="report__body">
                    <p class="current__hours">${
                      value.timeframes.weekly.current
                    }hrs</p>
                    <p class="prev__hours">Last Week - ${
                      value.timeframes.weekly.previous
                    }hrs</p>
                </div>
            </div>
          `;

          reportContainer.appendChild(reportCard);
        });
      });
  } catch (error) {
    console.log(error);
  }
}

function getMonthlyData() {
  try {
    reportContainer.innerHTML = "";

    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        data.forEach((value) => {
          const title = value.title;
          const reportCard = document.createElement("div");
          reportCard.classList.add("report__card");
          reportCard.innerHTML = `
            <img src="./images/icon-${title
              .toLowerCase()
              .replace(" ", "-")}.svg" alt="">
            <div class="report__details">
                <div class="report__header">
                    <h2>${title}</h2>
                    <img src="./images/icon-ellipsis.svg" alt="">
                </div>
                <div class="report__body">
                    <p class="current__hours">${
                      value.timeframes.monthly.current
                    }hrs</p>
                    <p class="prev__hours">Last Month - ${
                      value.timeframes.monthly.previous
                    }hrs</p>
                </div>
            </div>
          `;

          reportContainer.appendChild(reportCard);
        });
      });
  } catch (error) {
    console.log(error);
  }
}

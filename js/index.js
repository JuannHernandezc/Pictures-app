const executeReponsive = () => {
  const containerResponsive = document.getElementById("container-responsive");
  const containerNav = document.getElementById("container-navigation");
  const containerClose = document.getElementById("container-close");
  const btnResponsive = document.getElementById("btn-responsive");
  const btnClose = document.getElementById("btn-close");

  btnResponsive.addEventListener("click", () => {
    containerNav.style.display = "flex";
    containerClose.style.display = "flex";
    containerResponsive.style.display = "none";
  });

  btnClose.addEventListener("click", () => {
    containerNav.style.display = "none";
    containerClose.style.display = "none";
    containerResponsive.style.display = "flex";
  });
};

const getLoad = () => {
  const url =
    "https://api.unsplash.com/photos/random?client_id=ELpB62mPz2TxGivCxc_AE-Nlsd0xLD_DMW6_VwDOR_c&count=12";
  const fragment = document.createDocumentFragment();
  const mainGrid = document.getElementById("main__grid");
  const btnSeeMore = document.getElementById("seeMore");
  const fragmentFinal = document.createDocumentFragment();
  const getPictures = async (url) => {
    try {
      const answer = await fetch(url);
      const data = answer.json();
      data.then((result) => {
        for (let i = 0; i < result.length; i++) {
          if (i < 6) {
            const div = document.createElement("div");
            const img = document.createElement("img");
            img.src = result[i].urls.regular;
            div.appendChild(img);
            fragment.appendChild(div);
          }else{
            const div = document.createElement("div");
            const img = document.createElement("img");
            img.src = result[i].urls.regular;
            div.appendChild(img);
            fragmentFinal.appendChild(div);
          }
        }
        mainGrid.appendChild(fragment);

        btnSeeMore.addEventListener('click', () =>{
            mainGrid.appendChild(fragmentFinal);
            btnSeeMore.style.display = 'none';
        });
      });

    } catch (error) {
      console.log(error);
    }
  };
  getPictures(url);
};

executeReponsive();

getLoad();

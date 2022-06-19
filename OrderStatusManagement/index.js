let statusBlocks = document.getElementsByClassName("status-block");
let orderIDInfo = document.getElementById('order-id-info')
const addDoneClass = (index) => statusBlocks[index].classList.add("done");

const executeOrder = (callback) => {
  //CallBack Hell
    const orderID = document.getElementById('order-id-input').value
    orderIDInfo.innerText = 'Status of Order ID: ' + orderID
  addDoneClass(0);

  setTimeout(() => {
    addDoneClass(1);

    setTimeout(() => {
      addDoneClass(2);

      setTimeout(() => {
        addDoneClass(3);

        setTimeout(() => {
          addDoneClass(4);

          setTimeout(() => {
            addDoneClass(5);

            setTimeout(() => {
              addDoneClass(6);

              setTimeout(() => {
                addDoneClass(7);

                setTimeout(() => {
                  addDoneClass(8);

                  setTimeout(() => {
                    addDoneClass(9);

                    callback();
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 2000);
};

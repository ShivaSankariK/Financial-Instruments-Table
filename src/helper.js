const handleSorter = (data, value) => {
    var newSet = [];
    if(value === "ticker"){
      newSet = data.sort((a, b) => {
        let fa = a.ticker.toLowerCase(),
            fb = b.ticker.toLowerCase();
    
        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
    });
    } else if(value === "price"){
      newSet = data.sort((a, b) => {
        let fa = a.price,
            fb = b.price;
    
        if (fa > fb) {
            return -1;
        }
        if (fa < fb) {
            return 1;
        }
        return 0;
    });
    } else {
      newSet = data.sort((a, b) => {
        let fa = a.assetClass === "Credit" ? "zcredit" : a.assetClass.toLowerCase() ,
            fb = b.assetClass === "Credit" ? "zcredit" : b.assetClass.toLowerCase();
            if (fa < fb) {
              return -1;
          }
          if (fa > fb) {
              return 1;
          }
          return 0;
        
    });
    }
    return newSet;
};
export default handleSorter;

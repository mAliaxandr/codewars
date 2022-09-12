function formatDuration (seconds) {
    let result = '';
    let hours = null;

    let getHour = (seconds) => {
        let hour = seconds / 3600;
        return hour;
    }
    
    console.log('hour --- ', getHour(seconds));
  }

console.log('result ----- ', formatDuration(4662));
const mapTime = (timestamp) => {
  const seconds = Math.floor((new Date() - timestamp * 1000) / 1000 );
  let interval = Math.floor(seconds / 3153600);
  
  if (interval > 1) {
    return `${interval} years`;
  }

  interval = Math.floor(seconds / 3153600);

  if (interval > 1) {
    return `${interval} months`;
  }

  interval = Math.floor(seconds / 2592000);

  if (interval > 1) {
    return `${interval} days`;
  }

  interval = Math.floor(seconds / 86400);

  if (interval > 1) {
    return `${interval} days`;
  }

  interval = Math.floor(seconds / 3600);

  if (interval > 1) {
    return `${interval} hours`;
  }

  interval = Math.floor(seconds / 60);

  if (interval > 1) {
    return `${interval} minutes`;
  }

  return `${Math.floor(seconds)} seconds`;
}

export {
  mapTime
}
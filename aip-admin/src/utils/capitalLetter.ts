export function capitalizeFirstLetter(str: string): string {
    if (!str) return ''; 
  

    const capitalizedWords = str
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  
    return capitalizedWords;
  }
  
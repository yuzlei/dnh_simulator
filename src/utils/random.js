export default (min, max, type = "number") => {
    if (min > max) [min, max] = [max, min];
    switch (type){
        case "number":
            return `${Math.floor(Math.random() * (max - min + 1)) + min}`;
        case "decimal":
            return `${(Math.random() * (max - min) + min).toFixed(1)}%`;
    }
}
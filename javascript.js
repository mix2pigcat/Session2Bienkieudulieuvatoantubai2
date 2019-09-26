function temperature() {
    let celscius,fahrenheit;
    celscius=parseInt(document.getElementById('a').value);
    fahrenheit=((celscius*1.8)+3.2);
    document.getElementById('kq').value=fahrenheit;
}
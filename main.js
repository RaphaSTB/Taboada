function tabuada(){
     var num = window.document.getElementById('first')
     var end = document.getElementById('second')
     if (num.value.lenght == 0 || end.value.lenght == 0){
        window.alert('[ERRO] Confira os seus dados!')
     } else{
        var n = Number(first.value)
        var e = Number(second.value)
        var x = 0
        var r = ''
        var res = window.document.getElementById('resposta')
        res.innerHTML = `A tabuada de ${n} é:<br>`
        do{
            r = n*x
            res.innerHTML += `${x} x ${n} = ${r}<br>`
            x++
        }while(x <= e)
    }
}
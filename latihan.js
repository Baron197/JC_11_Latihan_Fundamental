// Speed & Space & Maintain Ability

// console.log('Hello')
// console.log('Hello')
// console.log('Hello')
// console.log('Hello')
// console.log('Hello')

// // 2

// var i = 0;
// while(i < 531) {
//     console.log('Hello')
//     i++
// }
// var i = 0;
// while(i < 5) {
//     i++;
// }
// for(var i = 0; i < 5; i++) {

// }
// while(true) {
//     while() {
//         if() {
//             if() {
//                 while()
//             }
//         }
//     }
// }
// var arr = [5,'hello',true,() => console.log('hello'), {}]
// // arr[1]
// var obj = {
//     angka: 5,
//     kata: 'hello',
//     single: true,
//     printhello: () => console.log('hello'),
//     listnamaanak: []
// }
// arr[3]()
// obj.printhello()

// var a = 5
// a = 'hello'
// class MakhlukHidup {
//     constructor(name,age) {
//         this.nama = name
//         this.umur = age
//     }
// }

// function makhlukHidup(name,age) {
//     return { nama: name, umur: age }
// }

// var mkhlk1 = new MakhlukHidup('Billy', 24)
// var mkhlk2 = makhlukHidup('Billy',24)

// console.log(mkhlk1)
// console.log(mkhlk2)

// class Manusia extends MakhlukHidup {
//     constructor(name,age,job) {
//         super(name,age)
//         this.pekerjaan = job
//     }
// }

// class Tumbuhan extends MakhlukHidup {
//     constructor(name,age,roottype) {
//         super(name,age)
//         this.jenisakar = roottype
//     }
// }

// var manusia1 = new Manusia(25, 'Andi')
// var manusia2 = new MakhlukHidup('Budi', 30, {l:'test'})
// var manusia3 = new Manusia(true, [1,2,3])

// console.log(manusia1)
// console.log(manusia2)
// console.log(manusia3)

// function test(kucing) {
//     console.log(kucing)
// }

// var b = 5
// test(b)


// // fitur 1
// console.log('\n Fitur 1\n')
// for(var i = 0; i < 1; i++) {
//     console.log('hello')
// }

// //fitur 2
// console.log('\n Fitur 2\n')
// for(var i = 0; i < 2; i++) {
//     console.log('hello')
// }

// // fitur 3 
// console.log('\n Fitur 3\n')
// for(var i = 0; i < 3; i++) {
//     console.log('hello')
// }

// // fitur 4
// console.log('\n Fitur 4\n')
// for(var i = 0; i < 4; i++) {
//     console.log('hello')
// }

// var fitur = (jumlah) => {
//     console.log(`\n Fitur ${jumlah}\n`)
//     for(var i = 0; i < jumlah; i++) {
//         console.log('hello')
//     }
// }

// fitur(1)
// fitur(2)
// fitur(3)
// fitur(4)

// class Header extends Component {
//     state = { nama: 'Baron' }
//     tampilkan() {
//         console.log(this.state.nama)
//     }

//     render() {
//         return (
//             <div>
//                 <input type="button" value={this.props.kucing} onClick={this.tampilkan.bind(this)} />
//             </div>
//         )
//     }
// }

// import Header from 

// class App extends Component {
//     render() {
//         return  <div> 
//                     <Header kucing="OK"/>
//                     <Header kucing="Cancel"/>
//                     <Header />
//                 </div>
//     }
// }

// test()
// var test = () => {
//     console.log('hello')
// }


// var coba = (a, b=5) => {
//     console.log(a+b)
// }

// coba(3,2)

// var kucing = (a,b) => {
//     return [5,{
//         test: (a) => {
//             return () => {
//                 return () => {
//                     return {
//                         keren: (arr) => {
//                             return {
//                                 gaul: () => {
//                                     return [1,2,{
//                                         test: () => {
//                                             return () => {
//                                                 return { 
//                                                     keren: [1,[1,2,() => console.log('hello')]]
//                                                 }
//                                             }
//                                         }
//                                     }]
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }]
// }

// kucing(5,'hello')[1].test(true)()().keren([2]).gaul()[2]['test']()().keren[1][2]()


// var arr = [1,2,3]

// var arrHasil = arr.map((item,index) => {
//     return item
// })

// var arrHasil1 = arr.filter((item,index) => {
//     return true
// })

// console.log(arrHasil)
// console.log(arrHasil1)

// var arr1 = [1,2,3]

// var map = (arr,cbfn) => {
//     var newArr = new Array(arr.length)

//     for(var i = 0; i < arr.length; i++) {
//         newArr[i] = cbfn(arr[i], i)
//     }

//     return newArr
// }

// var filter = (arr,cbfn) => {
//     var newArr = []

//     for(var i = 0; i < arr.length; i++) {
//         if(cbfn(arr[i],i)) {
//             newArr.push(arr[i])
//         }
//     }

//     return newArr
// }

// function angkagenap() {
//     return (val,ind) => {
//         var hasil = val % 2 == 0
//         return hasil
//     }
// }

// var hasilArray1 = map(arr1, (item,index) => `Index ke ${index} : ${item}`)
// console.log(hasilArray1)
// console.log(filter(arr1, angkagenap())) 

// var arrbaru = [4,1,3,2]

// var sort = (arr, cbfn) => {
//     for(var i = 0; i < arr.length - 1; i++) {
//         for(var j = i+1; j < arr.length; j++) {
//             if(cbfn(arr[i],arr[j]) > 0) {
//                 [arr[i],arr[j]] = [arr[j],arr[i]]
//             }
//         }
//     }
//     return arr
// }

// var asc = sort(arrbaru, (a,b) => a - b)
// var dsc = sort(arrbaru, (a,b) => b - a)

// console.log(asc)
// console.log(dsc)
// console.log(arrbaru)

// var print = console.log

// print('Hello Guys')

// var coba = () => {
//     return () => {
//         return 5
//     }
// }

// var a = coba
// var b = coba()

// print(a()())
// print(b())

// var tampilkan = (valuenya, penampil) => {
//     penampil(valuenya)
// }

// tampilkan('hello',console.log)

// setTimeout(() => console.log(4), 3000)
// console.log(1)
// console.log(2)
// console.log(3)

// var req = axios.get('https://api.purwadhika.com/getproduct')
// req.then((res) => {
//     axios.get('https://api.purwadhika.com/getuser')
//     .then((res) => {

//     }).catch((err) => {
        
//     })
// }).catch((err) => {

// })


var conn = {
    host: 'localhost'
}

conn.query('Select * from products', (err,results) => {
    if(err) {
        return res.status(500).send(err)
    }
    conn.query('Select * from users', (err,results1) => {
        if(err) {
            return res.status(500).send(err)
        }
    
        res.status(200).send(results1)
        conn.query('Select * from users', (err,results1) => {
            if(err) {
                return res.status(500).send(err)
            }
        
            res.status(200).send(results1)
            conn.query('Select * from users', (err,results1) => {
                if(err) {
                    return res.status(500).send(err)
                }
            
                res.status(200).send(results1)
            })
        })
    })
})


// var contoh = [1,2];
// if(contoh) {
//     console.log('hello')
// }











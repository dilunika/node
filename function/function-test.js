/**
 * Created by dilunika on 12/5/14.
 */

function doSomething(name,somthing){

    console.log('going to do something ..')
    somthing(null, name)
}

function sayHello(error, name){
    if(error != null){
        console.log('error occured ...')
    }
    console.log('Hello ' + name)
}

doSomething('Chavi',sayHello)
export default function date(time){
    var date=new Date(time);
    return `${(date.getFullYear())}-${(date.getMonth()+1)}-${(date.getDate())}`
}
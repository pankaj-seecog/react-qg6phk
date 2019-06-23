import React,{Component} from 'react';

class Actors extends Component{

constructor(){
this.state = {
  actors : [
    {
      actor_name : 'Sarukh Khan',
      actor_age : 53,
      actor_films : [
        {film_name : 'Zero',film_pic : 'https://pmcvariety.files.wordpress.com/2019/04/zero.jpg?w=1000&h=563&crop=1'},
        {film_name : 'Karan-Arjun',film_pic : 'https://i.ytimg.com/vi/bT9Briied_8/hqdefault.jpg'},
        {film_name : 'Kuch kuch hota hai',film_pic : 'https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/10/16/Pictures/_c4d2ad66-d125-11e8-9a37-2776cb441552.jpg'}
      ]
    },
    {
       actor_name : 'Salman Khan',
      actor_age : 53,
      actor_films : [
        {film_name : 'Dabang',film_pic : 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201904/dabangg3.jpeg?6.P8dVM0KmO9XlwQUkrStGPTxImbhNm.'},
        {film_name : 'Wanted',film_pic : 'https://static-koimoi.akamaized.net/wp-content/new-galleries/2011/03/Salman-Khan-Hot-Wanted-Movie-Hot-Images-Stills-Gallery-Pictures-Photos.jpg'},
        {film_name : 'Bajrangi Bhaijan',film_pic : 'https://i.ytimg.com/vi/-V5DGI3E2RU/maxresdefault.jpg'}
      ]
    },
    {
       actor_name : 'Hritik Roshan',
      actor_age : 53,
      actor_films : [
        {film_name : 'Kaho na pyar hai',film_pic : 'https://c.saavncdn.com/352/Kaho-Naa-Pyaar-Hai-Hindi-1999-20190219090748-500x500.jpg'},
        {film_name : 'Krrish',film_pic : 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201811/hrithik_krrish.jpeg?5zEItphSrsVoHqVHmIagVgdZlxgU95c8'},
        {film_name : 'Dhoom 2',film_pic : 'https://i.bollywoodmantra.com/albums/movie-stills/dhoom-2/dhoom-2_hrithik-roshan_11340.jpg'}
      ]
    }
  ]
}
}

render(){

  return (
    <div>
<table>
<th>Name</th><th>Age</th><th>Films</th>
{
  this.state.actors.map((ac)=>{
    return (
      <tr>
<td>{ac.actor_name}</td>
<td>{ac.actor_age}</td>
<td>
<ul>
{
ac.actor_films.map((fm)=>{
  return (
    <li>
    {fm.film_name} <br/> 
    <img src={fm.film_pic} width='50' height='50' />
    </li>
  )
})
}
</ul>
</td>
      </tr>
    )
  })
}
</table>
</div>
  )

}
}

export default Actors;
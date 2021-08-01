
const IMG_URL = 'https://image.tmdb.org/t/p/w200'

const Cast = ({cast}) => {
    return ( 
        <ul>
            {cast.map(({character, id, name, original_name, profile_path}) => (
                <li key={id}>
                    <img src={`${IMG_URL}${profile_path}`} alt={name}/>
                    <p>Actor: {name}</p>
                    <p>Character: {character}</p>
                </li>
            ))}
        </ul>
     );
}
 
export default Cast;
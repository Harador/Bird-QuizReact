export default (props)=>{
    const sections =['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы',]
    return(
        <div className='Menu'>
            <ul> 
                {sections.map((section, index) => (<li key={index} className={`${index==props.currentSection ? 'active' : ''}`}>{section}</li>))}
            </ul>
        </div>        
    )
}
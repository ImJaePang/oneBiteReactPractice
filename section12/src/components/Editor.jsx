import './Editor.css';
import EmotionItem from './EmotionItem';

const arrEmotionObject = [
    {emotionId : 1, emotionName:"완전좋음"},
    {emotionId : 2, emotionName:"그냥좋음"},
    {emotionId : 3, emotionName:"적당함"},
]

const Editor = () => {
    return <div className='Editor'>
        <section className='date_section'>
            <h4>오늘의 날짜</h4>
            <input type='date' />
        </section>
        <section className='emoton_section'>
            <h4>오늘의 감정</h4>
            <div>
                {arrEmotionObject.map((emotion)=>{
                    return <EmotionItem emotionId={emotion.emotionId} emotionName={emotion.emotionName} />
                })}
                <EmotionItem />
                <EmotionItem />
                <EmotionItem />
            </div>
        </section>
        <section className='content_section'></section>
        <section className='button_section'></section>
    </div>
}

export default Editor;
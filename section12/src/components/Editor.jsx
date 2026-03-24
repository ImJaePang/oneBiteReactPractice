import './Editor.css';
import EmotionItem from './EmotionItem';
import Button from './Button';

const emotionList = [
    {emotionId : 1, emotionName:"완전좋음"},
    {emotionId : 2, emotionName:"그냥좋음"},
    {emotionId : 3, emotionName:"적당함"},
    {emotionId : 4, emotionName:"나쁨"},
    {emotionId : 5, emotionName:"끔찍함"},
]

const Editor = () => {

    const emotionid = 1;

    return <div className='Editor'>
        <section className='date_section'>
            <h4>오늘의 날짜</h4>
            <input type='date' />
        </section>
        <section className='emotion_section'>
            <h4>오늘의 감정</h4>
            <div className='emotion_list_warapper'>
                {emotionList.map((item)=>{
                    return <EmotionItem key={item.emotionId} {...item} isSelected={item.emotionId === emotionid} />
                })}
            </div>
        </section>
        <section className='content_section'>
            <h4>오늘의 일기</h4>
            <textarea placeholder='오늘은 어땠나요?'/>
        </section>
        <section className='button_section'>
                <Button text={"취소하기"} />
                <Button text={"직상 어니려"} type={"POSITIVE"} />
        </section>
    </div>
}

export default Editor;
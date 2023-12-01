import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import '../css/TimeLineView.css';



function TimeLineView2(){
    return(
        <div className='timeline'>
            <Timeline position="alternate">
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent></TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '30px', px: 2 }}>
                        <Typography>2018. 9</Typography>
                        <Typography variant="h6" component="span">
                            [ 2 ]  
                        </Typography>
                        <Typography>第一次對你有印象是在系羽，只覺得這個男生好奇怪，</Typography>
                        <Typography>為什麼我跟他講話都不敢看我🤣</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '30px', px: 2 }}>
                        <Typography>2018. 10</Typography>
                        <Typography variant="h6" component="span">
                            [ 心理學概論 ]  
                        </Typography>
                        <Typography>『 誒你知道我們班有個男生跟我們修同一堂課嗎？』</Typography>
                        <Typography>「 誰啊？ 」</Typography>
                        <Typography>『 那個眉毛長這樣 \ || / 的那個男生啊。』</Typography>
                        <Typography>「 喔喔喔！我知道了！ 」</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '30px', px: 2 }}>
                        <Typography>2020. 5</Typography>
                        <Typography variant="h6" component="span">
                            [ 擦身而過 ]  
                        </Typography>
                        <Typography>你不幸的韌帶斷掉，沒辦法一起在 stanCode 實習</Typography>
                        <Typography>同時的我，並不知道我們的好感是互相的，</Typography>
                        <Typography>因為你冷淡(🙃)的聊天回覆而暫時錯過了彼此</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '30px', px: 2 }}>
                        <Typography>2020. 9</Typography>
                        <Typography variant="h6" component="span">
                            [ 一起踏上資工的路 ]  
                        </Typography>
                        <Typography>大三上，開始一起修了資工計概，</Typography>
                        <Typography>雖然上不同老師的課，但每次為了跟你聊天，</Typography>
                        <Typography>都在下課後順便去7-11買東西，</Typography>
                        <Typography>“這應該只是...友情吧？” 當時的我是這樣想的</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '30px', px: 2 }}>
                        <Typography>2021. 5</Typography>
                        <Typography variant="h6" component="span">
                            [ 疫情 ]  
                        </Typography>
                        <Typography>這時的我一直保持著平常心跟你相處，結果換你內心戲很多，</Typography>
                        <Typography>交給你填滿這段了！</Typography>
                        <Typography>( 我們怎麼一直錯過咧 )</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '30px', px: 2 }}>
                        <Typography>2021. 8</Typography>
                        <Typography variant="h6" component="span">
                            [ 雙主修 ]  
                        </Typography>
                        <Typography>七八月份的我們被 GPE 和雙主修制度搞得焦頭爛額</Typography>
                        <Typography>此時的我都不知道你心裡承受了什麼😢</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '30px', px: 2 }}>
                        <Typography>2021. 10</Typography>
                        <Typography variant="h6" component="span">
                            [ 圖書館 ]  
                        </Typography>
                        <Typography>在圖書館一起寫演算法的日子，</Typography>
                        <Typography>走在你身邊的時後，突然有了些不一樣的感覺，</Typography>
                        <Typography>但我一時也說不上來是什麼。</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '30px', px: 2 }}>
                        <Typography>2021. 11</Typography>
                        <Typography variant="h6" component="span">
                            [ 宵夜 ]  
                        </Typography>
                        <Typography>不知道怎麼開始的，</Typography>
                        <Typography>圖書館閉館後都會一起去吃宵夜，</Typography>
                        <Typography>從女二、永豆，一路吃到滿美，</Typography>
                        <Typography>每天最期待的，就是晚上和你吃宵夜聊天的時光。</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '30px', px: 2 }}>
                        <Typography>2021. 11</Typography>
                        <Typography variant="h6" component="span">
                            [ 夜市 ]  
                        </Typography>
                        <Typography>在茫茫人海中，怕我走丟的你，</Typography>
                        <Typography>一把牽起了我的袖子，</Typography>
                        <Typography>當時你的背影有多麽帥氣耀眼，我想我這輩子都不會忘記。</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '30px', px: 2 }}>
                        <Typography>2021. 12</Typography>
                        <Typography variant="h6" component="span">
                            [ 來個大的？ ]  
                        </Typography>
                        <Typography>綜一旁的綠蔭大道上，</Typography>
                        <Typography>準備完週五 OS 小考的我們正準備回宿舍，</Typography>
                        <Typography>『 星期五考完小考，晚上要不要來個大的？ 』你問。</Typography>
                        <Typography>( 當時的我：啊啊啊啊天啊他要幹嘛！！)</Typography>
                        <Typography>( 現在的我：哈哈哈哈哈哈哈哈沙小超好笑)</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                    <TimelineDot />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '30px', px: 2 }}>
                        <Typography>2021. 12. 3</Typography>
                        <Typography variant="h6" component="span">
                            [ D-day ]  
                        </Typography>
                        <Typography>接下來...... 請按下面的箭頭繼續觀賞</Typography>
                        
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>
    );
};

export default TimeLineView2;
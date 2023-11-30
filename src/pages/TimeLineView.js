import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import '../css/TimeLineView.css';



function TimeLineView(){
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
                            [ 在大學相遇了 ]  
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
                        <Typography>因為你冷淡(🙃)的聊天回覆而錯失良機</Typography>
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
                        <Typography>因為你冷淡(^^)的聊天回覆而錯失良機</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Repeat</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Repeat</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                    <TimelineDot />
                    </TimelineSeparator>
                    <TimelineContent>Repeat</TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>
    );
};

export default TimeLineView;
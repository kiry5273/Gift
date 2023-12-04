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
                        <Typography>2022. 12. 31</Typography>
                        <Typography variant="h6" component="span">
                            [ 跨年 ]  
                        </Typography>
                        <Typography>在一起後第一次一起跨年，</Typography>
                        <Typography>一起聽著麋先生、美秀集團，</Typography>
                        <Typography>在跨年的瞬間你在我耳邊輕聲地說了：「我愛你」，</Typography>
                        <Typography>這是我2022年聽到的第一句話，也是我最喜歡的一句話2323</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '30px', px: 2 }}>
                        <Typography>2022. 1. 20 - 1. 21</Typography>
                        <Typography variant="h6" component="span">
                            [ 第一次旅行 ]  
                        </Typography>
                        <Typography>忙了一整個學期，終於有機會一起去台南玩。</Typography>
                        <Typography>第一次一起過夜好緊張，前一天還很緊張的跟盧琬心商討（？）</Typography>
                        <Typography>暖暖的冬日台南，是最美好的回憶。</Typography>
                        <Typography>（但到底誰會只去台南兩天一夜啦？？）</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '30px', px: 2 }}>
                        <Typography>2022. 2. 14</Typography>
                        <Typography variant="h6" component="span">
                            [ 第一個情人節 ]  
                        </Typography>
                        <Typography>盛裝打扮和你度過第一個情人節 ♥</Typography>
                        <Typography>蒙日豐盛的餐點、尼羅河謀殺案，</Typography>
                        <Typography>Nothing gonna change my love for you!</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '30px', px: 2 }}>
                        <Typography>2022. 2. 18 - 2. 19</Typography>
                        <Typography variant="h6" component="span">
                            [ 謝謝國旅券 - 台中 ]  
                        </Typography>
                        <Typography>趁著剛開學又再出去玩了一次！</Typography>
                        <Typography>好喜歡好喜歡和你一起旅行，悠悠哉哉的漫步在城市裡。</Typography>
                        
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '30px', px: 2 }}>
                        <Typography>2022. 2. 22</Typography>
                        <Typography variant="h6" component="span">
                            [ 生日 ]  
                        </Typography>
                        <Typography>以為是鋼鐵直男的你，</Typography>
                        <Typography>一次又一次的給了我浪漫的驚喜（雖然沒有成功把我騙到工六哈哈）</Typography>
                        <Typography>特地為我學的吉他，還有偷偷去買的mummum蛋糕，</Typography>
                        <Typography>其實你不用努力成為我喜歡的樣子，因為你原本的樣子就是我最最最愛的。</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '30px', px: 2 }}>
                        <Typography>2022. 4. 20</Typography>
                        <Typography variant="h6" component="span">
                            [ 房租合約 ]  
                        </Typography>
                        <Typography>正式簽了房租合約！成為了鄰居！</Typography>
                        <Typography>在明湖路小小的三坪大的房間，</Typography>
                        <Typography>都是幸福的回憶。</Typography>
                    </TimelineContent>
                </TimelineItem>
                {/* <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '30px', px: 2 }}>
                        <Typography>2022. 4. 25 - 4. 26</Typography>
                        <Typography variant="h6" component="span">
                            [ 謝謝國旅券 - 苗栗 ]  
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
                        <Typography>2022. 6. 11</Typography>
                        <Typography variant="h6" component="span">
                            [ 小畢典 ]  
                        </Typography>
                        <Typography>在圖書館一起寫演算法的日子，</Typography>
                        <Typography>走在你邊的時後，突然有了些不一樣的感覺，</Typography>
                        <Typography>但我一時也說不上來是什麼。</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '30px', px: 2 }}>
                        <Typography>2022. 6 .27 - 7. 2</Typography>
                        <Typography variant="h6" component="span">
                            [ 畢旅 ]  
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
                        <Typography>2022. 7. 5</Typography>
                        <Typography variant="h6" component="span">
                            [ 嗯... ]  
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
                        <Typography>2021. 8. 5</Typography>
                        <Typography variant="h6" component="span">
                            [ 七夕 ]  
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
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '30px', px: 2 }}>
                        <Typography>2021. 8. 9</Typography>
                        <Typography variant="h6" component="span">
                            [ 第一次去你家 ]  
                        </Typography>
                        <Typography>綜一旁的綠蔭大道上，</Typography>
                        <Typography>準備完週五 OS 小考的我們正準備回宿舍，</Typography>
                        <Typography>『 星期五考完小考，晚上要不要來個大的？ 』你問。</Typography>
                        <Typography>( 當時的我：啊啊啊啊天啊他要幹嘛！！)</Typography>
                        <Typography>( 現在的我：哈哈哈哈哈哈哈哈沙小超好笑)</Typography>
                    </TimelineContent>
                </TimelineItem> */}
                <TimelineItem>
                    <TimelineSeparator>
                    <TimelineDot />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '30px', px: 2 }}>
                        <Typography>----</Typography>
                        <Typography variant="h6" component="span">
                            [ 未完待續 ]  
                        </Typography>
                        <Typography>趕工中！！</Typography>
                        
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>
    );
};

export default TimeLineView2;
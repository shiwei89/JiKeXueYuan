-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 2015-12-24 17:53:37
-- 服务器版本： 10.1.8-MariaDB
-- PHP Version: 5.6.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `baidunews`
--

-- --------------------------------------------------------

--
-- 表的结构 `allnews`
--

CREATE TABLE `allnews` (
  `newsid` int(11) NOT NULL,
  `newstitle` varchar(100) NOT NULL,
  `newscontent` text NOT NULL,
  `newsimg` varchar(200) NOT NULL,
  `addtime` date NOT NULL,
  `newstype` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='新闻表';

--
-- 转存表中的数据 `allnews`
--

INSERT INTO `allnews` (`newsid`, `newstitle`, `newscontent`, `newsimg`, `addtime`, `newstype`) VALUES
(3, '今年过百款银行理财提前终止', '央广网北京11月28日消息 据中国之声《央广新闻》报道，统计显示，截至11月底，今年以来已经有超过百只银行理财产品提前终止，创下2011年以来同期的最高记录。在冷空气席卷我国大部分地区的同时，伴随着央行的不断降息，银行理财业务也遭遇着“寒冬”。', 'http://t10.baidu.com/it/u=http://img4.cache.netease.com/3g/2015/11/28/201511281039470def6.jpg&fm=36', '2015-11-27', 'hot'),
(4, '马航失联书画家花2万5参会', '乘坐马航MH370失联的154名中国乘客中，有一个由24位中国书画家组成的赴马来西亚参加交流活动的艺术团，这24位艺术家均在事故中失联。据新京报此前报道，中国书法艺术家协会是此次活动的主办方之一，探针发现该协会是未在民政局登记的民间组织，且活动主办方是另一个商业公司。', 'http://t11.baidu.com/it/u=http://inews.gtimg.com/newsapp_bt/0/105240386/1000&fm=36', '2015-12-15', 'hot'),
(5, '恒大土炮撑冠军脊梁 进球过半', '腾讯体育11月28日讯 恒大靠外援崛起不假，不过刚刚过去的2015赛季，在一度只有高拉特一名外援可以披挂上阵的情况下，恒大的本土大将们替球队撑起了门面，帮助华南虎复制了2013赛季的辉煌。2015赛季，恒大本土球员的进球比例首次超过50%，队内的大部分国脚全年的出场场次都超过了40场，恒大和国足的双料队长郑智全年的出场次数更是达到了惊人的49场，这也是郑智为何又一次成为亚洲足球先生热门人选的关键。', 'http://t11.baidu.com/it/u=http://inews.gtimg.com/newsapp_bt/0/105347241/1000&fm=37', '2015-11-28', 'hot'),
(6, '春运抢票下周末预计进入白热化', '新京报讯 （记者郭超）电话、网络抢春运票从11月26日开始，到车站以及售票点窗口购买春运票则从今天开始，北京四大火车站将分时段起售。从12月6日起，春运抢票开始进入白热化。', 'http://t11.baidu.com/it/u=http://r3.sinaimg.cn/10230/2015/1128/a8/0/78553146/auto.jpg&fm=36', '2015-11-28', 'hot'),
(7, '京东金融想怎样“重新定义”众筹？', '一夜之间，众筹行业换了光景。作为众筹行业老大的京东金融，昨日在深圳召开BIGGER大会，宣布重新定义众筹，这让市场感到奇怪。众筹行业发生了什么？为什么京东要重新定义？重新定义之后，市场又将如何演进？', 'http://t10.baidu.com/it/u=http://h.hiphotos.baidu.com/news/crop%3D0%2C1%2C520%2C312%3Bw%3D638/sign=79b86365bf014a9095711cfd94471523/2934349b033b5bb5ae45fc2930d3d539b700bc53.jpg&fm=37', '2015-11-28', 'web'),
(8, '我和一个零零后聊了一周 QQ', '一直对零零后的社交生活和心理状态很感兴趣。\r\n上周，我通过身边的人找到了一个 2000年 出生的属龙的男孩。和他联系前，我了解到他生活在一个东北的四线城市，初三，成绩中等偏下。因为不在同一个城市，我加了他 QQ，他网名叫 “月亮是我掰弯滴。”。我提出了语音、视频、电话等等方式，都被他拒绝了。\r\n“我感觉还是打字比较好。” 他在 QQ 上说。', 'http://t12.baidu.com/it/u=http://d.36krcnd.com/nil_class/4bc441da-8f2f-4de5-b9ab-a10bdb487621/038fa231bdf50194947e9e604aaf07a6.jpg!heading&fm=37', '2015-11-28', 'web'),
(9, '百度也布局互联网金融 小度其实是个好筹码', '摘要：我们的大脑肯定比电脑强太多太多，我们自己对大脑中各种记忆的搜索能力也不是电脑能赶得上的，但是电脑就是有比我们的大脑更具备优势的地方，它比我会计算。', 'http://t11.baidu.com/it/u=http://y0.ifengimg.com/a/2015_48/2c9f9a2311eba87.jpg&fm=37', '2015-11-28', 'web'),
(10, 'Facebook 如何用编程马拉松塑造企业文化激发创新性', '编者按：本文是由Uber 增长团队的技术总监、Facebook 的前技术总监 Pedram Keyani所写，他介绍了编程马拉松如何帮助公司塑造公司文化，激发创新，让代码战胜闲言碎语。', 'http://t10.baidu.com/it/u=http://d.36krcnd.com/nil_class/0a66f6f5-5948-431d-8bd2-7ef3e587eb0b/1-1QH5lHMRIc7iUjtz2oNrew.jpeg!heading&fm=37', '2015-11-28', 'web'),
(11, '32岁女星安妮·海瑟薇被曝怀孕', '网易娱乐11月28日报道 32岁女演员安妮·海瑟薇（Anne Hathaway）将迎来人生最重要一个角色：母亲！据外媒报道，这位奥斯卡最佳女配角奖获得者已确定怀孕。据悉，这将是海瑟薇和她34岁制作人老公亚当-舒尔曼（Adam Shulman）的首个孩子，两人于2012年完婚。', 'http://t11.baidu.com/it/u=http://img1.cache.netease.com/ent/2015/11/28/201511280940144d1de.jpg&fm=36', '2015-11-28', 'etm'),
(12, '罗志祥女友赴台为准婆婆庆生', '网易娱乐11月28日报道 据台湾媒体报道，罗志祥（小猪）的妈妈上周五（20日）满56岁，据悉，他的女友周扬青秘密飞台湾替准婆婆庆生，果然大前天就被目击她在信义区的贵妇百货悠哉逛街，她当天还在IG贴在东区知名甜点店用餐照，自曝行踪，记者前晚直击小猪收工后火速搭保姆车返家，显然不忍冷落她太久，没多久他又出门看新房，疑似寻觅新爱巢。此外，因她6月抽烟照曝光让周父震怒，已乖乖戒烟。', 'http://t10.baidu.com/it/u=http://img1.cache.netease.com/ent/2015/11/28/20151128073039bae4f.png&fm=37', '2015-11-28', 'etm'),
(13, '女星曝胡歌片场犯二:求插鼻孔', '网易娱乐11月28日报道 据台湾媒体《东森新闻》11月28日报道，内地演员胡歌拥有雕刻般的花美男外表，2005年演出《仙剑奇侠传》李逍遥一角后窜红，历经车祸、演艺事业低潮，10年后又因《琅琊榜》再度掀起演艺事业的另一波高峰，吸引大批粉丝追捧，此外与霍建华的“兄弟情”更是成为众人热议的焦点。近日同样演出《琅琊榜》后受瞩目的王鸥也在节目中爆料片场的趣事。', 'http://t11.baidu.com/it/u=http://img2.cache.netease.com/ent/2015/11/28/201511280841532b9a1.png&fm=37', '2015-11-28', 'etm'),
(14, '港星王菀之今出嫁 一切从简', '网易娱乐11月28日报道 据香港媒体报导，王菀之（Ivana）今天（11月28日）嫁Eric So，配合一对新人低调的性格，婚礼在阳明山庄举行，仪式一切从简。王菀之结婚前工作没停过，连日她要拍广告还要录音。昨天（11月27日）结婚前夕，她最后冲刺，她竟然是去洗牙。昨天（11月27日）准新娘子在社交网络贴上正在刷牙的照片，她写道：“明天将会有天然亮白牙齿……”她给牙齿做Spa，拍结婚照时笑容也会十分漂亮以及自然些。', 'http://t12.baidu.com/it/u=http://img2.cache.netease.com/ent/2015/11/28/20151128072527897bb.jpg&fm=37', '2015-11-28', 'etm');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `allnews`
--
ALTER TABLE `allnews`
  ADD PRIMARY KEY (`newsid`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `allnews`
--
ALTER TABLE `allnews`
  MODIFY `newsid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

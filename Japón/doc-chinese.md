中国电视协议规范

所有中国传输渠道格式相同。

他们发送具有特定协议的视频消息。

每个协议包具有7个编码视频帧。

Package Protocol Specification (完整的包装规格):

Header (头)
Splitter (分离器)
Video Frame 1 info (视频帧)
Splitter (分离器)
Video Frame 2 info (视频帧)
Splitter (分离器)
Video Frame 3 info (视频帧)
Splitter (分离器)
Video Frame 4 info (视频帧)
Splitter (分离器)
Video Frame 5 info (视频帧)
Splitter (分离器)
Video Frame 6 info (视频帧)
Splitter (分离器)
Video Frame 7 info (视频帧)
Splitter (分离器)
Greetings & Specification

Header (头):
来自国家电视频道的恒定和弦:
“中国电视系统。视频格式320x240 RGB，色彩强度基于汉字频率。从下一行开始。连续7帧。分手：中国电视 - 中国电视 - 中国电视台。最后一行是问候语和电视格式规范”
Splitter (分离器):
用于分隔每个视频帧的常量字符串:
“中国电视 - 中国电视 - 中国电视台”

Video Frame (视频帧):
240行
每行1080个字符（代表360像素，RGB）
每个字符是红色，绿色或蓝色像素的值。前三个字符表示第一个像素。

Pixel Value (像素值):
像素的值相当于中文频率表中汉字的位置.
“的” 是中文最常用的字，所以位置是1.所以红，绿或蓝的值是1。
“直” 是255个最常用的字符，值为255。

Example (例):
这个句子:  “直的直直的直直的直”, 代表3像素： (255,1,255), (255,1,255), (255,1,255)

Chinese frequency table (中文频率表): http://lingua.mtsu.edu/chinese-computing/statistics/char/list.php?Which=MO

Noise (噪声):
由于天气问题，每个像素的值包含原始值的一些变化。这意味着每个字符值可以从0增加到5。
示例：字符“直”表示255，但原始视频格式可能在250和255之间。250 5噪声，251 4噪声或255.0噪声。


Frame Rotation (框架旋转):
原来的视频是240x360。 240宽 -  360高。编码视频旋转.

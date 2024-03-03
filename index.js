// 定义虚拟活动平台类
function VirtualEventPlatform() {
    this.conferences = [];
    this.webinars = [];
    this.tradeShows = [];
    this.liveStreaming = false;
    this.chatRooms = [];
    this.networkingOpportunities = [];
    this.remoteParticipationEnabled = true;
    this.engagementEnabled = true;
}

// 添加会议
VirtualEventPlatform.prototype.addConference = function (conference) {
    this.conferences.push(conference);
};

// 添加网络研讨会
VirtualEventPlatform.prototype.addWebinar = function (webinar) {
    this.webinars.push(webinar);
};

// 添加虚拟展会
VirtualEventPlatform.prototype.addTradeShow = function (tradeShow) {
    this.tradeShows.push(tradeShow);
};

// 加入聊天室
VirtualEventPlatform.prototype.joinChatRoom = function (chatRoom) {
    this.chatRooms.push(chatRoom);
};

// 加入社交机会
VirtualEventPlatform.prototype.joinNetworkingOpportunity = function (networkingOpportunity) {
    this.networkingOpportunities.push(networkingOpportunity);
};

// 示例用法
var eventPlatform = new VirtualEventPlatform();

// 添加会议
eventPlatform.addConference("Virtual Conference 1");
eventPlatform.addConference("Virtual Conference 2");

// 添加网络研讨会
eventPlatform.addWebinar("Virtual Webinar 1");
eventPlatform.addWebinar("Virtual Webinar 2");

// 添加虚拟展会
eventPlatform.addTradeShow("Virtual Trade Show 1");
eventPlatform.addTradeShow("Virtual Trade Show 2");

// 加入聊天室
eventPlatform.joinChatRoom("Chat Room 1");
eventPlatform.joinChatRoom("Chat Room 2");

// 加入社交机会
eventPlatform.joinNetworkingOpportunity("Networking Opportunity 1");
eventPlatform.joinNetworkingOpportunity("Networking Opportunity 2");

// 打印平台信息
console.log("Virtual Event Platform:");
console.log("Conferences:", eventPlatform.conferences);
console.log("Webinars:", eventPlatform.webinars);
console.log("Trade Shows:", eventPlatform.tradeShows);
console.log("Chat Rooms:", eventPlatform.chatRooms);
console.log("Networking Opportunities:", eventPlatform.networkingOpportunities);
console.log("Live Streaming Enabled:", eventPlatform.liveStreaming);
console.log("Remote Participation Enabled:", eventPlatform.remoteParticipationEnabled);
console.log("Engagement Enabled:", eventPlatform.engagementEnabled);

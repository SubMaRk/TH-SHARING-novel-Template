AC.namespace("AC.Page.Rank");
AC.Page.Rank={init:function(){AC.Page.Core.init();this.bindEvent()},bindEvent:function(){AC.Page.Rank.tabs({handle:$("#month_ticket_rank").find("a"),panel:["#month_ticket_rank_content"],activeClass:"active",delay:100,callback:function(o){AC.Page.Rank.getPrevMonthTicketRank(o.index())}});AC.UI.Tabs.view({wrap:$(".ran-top-pay")});AC.UI.Tabs.view({wrap:$(".ran-top-hot")});AC.UI.Tabs.view({wrap:$(".rank-award-passage")});$("#ran-dir").hoverDelay({outDuring:100,hoverEvent:function(){$(this).find(".mod-tips-wr").show()},outEvent:function(){$(this).find(".mod-tips-wr").hide()}});
$("#ran-gg").hoverDelay({outDuring:100,hoverEvent:function(){$(this).find(".mod-tips-wr").show()},outEvent:function(){$(this).find(".mod-tips-wr").hide()}});AC.UI.Tabs.view({wrap:$(".ran-week-top")});$(".ui-bg-rank-red .mod-rank-month-wr").each(function(){$(this).find(".mod-rank-month-list").last().addClass("last")})},getPrevMonthTicketRank:function(index){if(index==0)$("#month-ticket-state-date").html($("#curr-mt-rank-date-range").val()+"  \u7edf\u8ba1\u8fdb\u884c\u4e2d...");else $("#month-ticket-state-date").html($("#prev-mt-rank-date-range").val())},
tabs:function(options){var opts=$.extend({handle:null,panel:null,eventType:"mouseover",activeClass:null,delay:0,callback:null},options),timer;var tab={view:function(){this.bindEvent();this.active(0)},bindEvent:function(){var self=this;if(opts.eventType=="hover")opts.eventType="mouseover";opts.handle.bind(opts.eventType,function(){if($(this).hasClass(opts.activeClass))return false;timer&&clearTimeout(timer);self.active($(this).index())})},change:function(element,index){var child=element.children(),
actObj=opts.handle.eq(index);actObj.addClass(opts.activeClass).siblings().removeClass(opts.activeClass);child.eq(index).show().siblings().hide()},active:function(index){var self=this,panel=opts.panel;if(opts.preProcess)opts.preProcess(index);function setPanel(){if(panel&&panel instanceof Array)for(var i=0,j=panel.length;i<j;i++)self.change($(panel[i]),index);else self.change(panel,index);opts.callback&&opts.callback(opts.handle.eq(index))}if(opts.delay)timer=setTimeout(function(){setPanel()},opts.delay);
else setPanel()}};tab.view()}};$(function(){AC.Page.Rank.init();$(".mod-top-small-nav li").eq(8).addClass("active").find("a").attr("href","javascript:void(0)")});
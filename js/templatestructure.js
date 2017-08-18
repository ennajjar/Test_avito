function templateStructure(data) {
	if(data==undefined)
		return '';

	var date = new Date(data.created_time);
	var now = new Date();

	var relativeDate = {
		Year : now.getYear() - date.getYear(),
		Month : now.getMonth() - date.getMonth(),
		Day : now.getDate() - date.getDate(),
		Minute: now.getMinutes() - date.getMinutes(),
		Second : now.getSeconds() - date.getSeconds(),
	}

	var timepassed;
	if(relativeDate.Year >= 0)
		timepassed = relativeDate.Year+ ' Years Ago';
	else if(relativeDate.Month >= 0)
		timepassed = relativeDate.Year + ' Months Ago';
	else if(relativeDate.Day >= 0)
		timepassed = relativeDate.Year + ' Days Ago';
	else if(relativeDate.Minute >= 0)
		timepassed = eelativeDate.Year + ' Minutes Ago';
	else if(relativeDate.Second >= 0)
		timepassed = relativeDate.Year + ' Seconds Ago';

	var template = '<div class="item">';
			template+= '<div class="content">';
				template+= '<div class="item-header">';
					template+= '<a class="account-group" href="'+data.user.link+'" target="_blank">';
						template+= '<img class="avatar" src="'+data.user.pictures.sizes[0].link+'" alt="">';
							template+= '<strong class="fullname">'+data.user.name+'</strong>';
							template+= '<span class="username">@<span>'+data.user.name+'</span></span>';
					template+= '</a>';
					template+= '<small class="time">';
					  template+= '<a href="#">'+timepassed+'</a>';
					template+= '</small>';
				template+= '</div>';
				template+=	'<div class="">';
				template+= '<h4><strong><a href="'+data.link+'" target="_blank">'+data.name+'</a></strong></h4>';
				template+=	'</div>';
				template+= '<div class="text-container">';
					template+= '<p class="tweet-text">'+data.description;+'</p>';
				template+= '</div>';
				template+=' <div class="mediaContainer">';
					template+= data.embed.html;
				template+= '</div>';
				template+= '<div class="item-footer">';
					template+= '<ul>';
						template+= '<li class="vues">Not found in feed</li>';
						template+=' <li class="likes"><i class="fa fa-heart-o" aria-hidden="true"></i> '+data.metadata.connections.likes.total+' k</li>';
						template+= '<li class="comments"> <i class="fa fa-comment-o" aria-hidden="true"></i> '+data.metadata.connections.comments.total+' k</li>';
					template+= '</ul>';
				template+= '</div>';
			template+= '</div>';
		template+= '</div>';

	return template;
}
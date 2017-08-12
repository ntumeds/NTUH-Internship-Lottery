function CreatePageSteps(clickable) {
	var nPageSteps = $('.PageStep').length;
	$('.PageStep').each(function(index, element){
		var link = $(this).attr('link');
		clickable = (clickable == null || clickable) ? true : false;
		if (!link)
			$('#PageSteps').append('<SPAN class="ui-button ui-corner-all MenuButton" id="MB_' + this.id + '" ' + (!clickable ? '' : 'onclick="SwitchPageStep(\'' + this.id + '\');"') + '>' + $(this).attr('alt') + '</SPAN>&nbsp;' + (index == nPageSteps - 1 ? '' : '<IMG src="./templates/arrow-to-right.png" style="height: 30px; margin-bottom: -10px;">&nbsp;' ));
		else
			$('#PageSteps').append('<SPAN class="ui-button ui-corner-all MenuButton" id="MB_' + this.id + '" ' + (!clickable ? '' : 'onclick="window.open(\'' + $(this).attr('link') + '\');"') + '>' + $(this).attr('alt') + '</SPAN>&nbsp;' + (index == nPageSteps - 1 ? '' : '<IMG src="./templates/arrow-to-right.png" style="height: 30px; margin-bottom: -10px;">&nbsp;' ));
	});
}

function SwitchPageStep(id) {
	$('.PageStep').css('display', 'none');
	$('#'+id).css('display', 'block');
	$('#PageSteps>.MenuButton').css('background-color', '');
	$('#MB_'+id).css('background-color', '#ff0000');
}


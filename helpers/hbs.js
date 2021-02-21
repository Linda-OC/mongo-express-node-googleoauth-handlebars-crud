const moment = require('moment');

module.exports = {
    formatDate: function (date, format) {
        return moment(date).utc().format(format);
    },
    truncate: function (str, len) {// 150 character limit for each story care - more uniform than 50 words
        if (str.length > len && str.length > 0) {
            let new_str = str + '';
            new_str = str.substr(0, len);
            new_str = str.substr(0, new_str.lastIndexOf(''));
            new_str = new_str.length > 0 ? new_str : str.substr(0, len);
            return new_str + '...';
        }
        return str;
    },
    // truncate: function (str, len) {// 50 word limit for each story card - can result in uneven card height
    //     const words = str.split(' ');
    //     if (words.length > len && words.length > 0) {
    //         return words.slice(0, len).join(' ') + '...';
    //     } else {
    //         return str;
    //     }
    // },
    stripTags: function (input) {
        return input.replace(/<(?:.|\n)*?>/gm, '');
    },
    editIcon: function (storyUser, loggedUser, storyId, floating = true) {
        if (storyUser._id.toString() == loggedUser._id.toString()) {
            if (floating) {
                return `<a href="/stories/edit/${storyId}" class="btn-floating halfway-fab blue"><i class="fas fa-edit fa-small"></i></a>`;
            } else {
                return `<a href="/stories/edit/${storyId}"><i class="fas fa-edit"></i></a>`;
            }
        } else {
            return '';
        }
    },
    select: function (selected, options) {
        return options
            .fn(this)
            .replace(
                new RegExp(' value="' + selected + '"'),
                '$& selected="selected"'
            )
            .replace(
                new RegExp('>' + selected + '</option>'),
                ' selected+"selected"$&'
            );
    },
};


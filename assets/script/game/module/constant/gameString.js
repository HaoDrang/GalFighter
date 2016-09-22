var util = require('constantUtil');

var GameString = {

      CHAPTER:'chapter',
            ID:'id',
            PARTS:'parts',
                PART:'part',
                    FRAMES:'frames',
                        FRAME:'frame',
                            ACTIONS:'actions',
                                ACTOR:'actor',
                                    VALUE:'value',
                                TYPE:'type',
                                    CAMERA      : 'camera',
                                    BACKGROUND  : 'background',
                                    DIALOG_BOX  : 'dialogBox',
                                DATA:'data',
                                ACTION:'action',
                                    SHAKE:'shake',
                                    ZOOM :'zoom',
                                    ANIMATE:'animate',
                                    JUMP:'jump',
                                    CHANGE:'change',
                                    POSTURE:'posture',
                            LINES:'lines',
                                TEXT:"text"

};

util.deepFreeze(GameString);

module.exports = GameString;
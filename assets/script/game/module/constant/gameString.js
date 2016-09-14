var util = require('constantUtil');

var GameString = {

      CHAPTER:'Chapter',
            PARTS:'Parts',
                PART:'Part',
                    FRAMES:'Frames',
                        FRAME:'Frame',
                            ACTIONS:'Actions',
                                ACTOR:'Actor',
                                    CAMERA      : 'Camera',
                                    BACKGROUND  : 'Background',
                                    DIALOG_BOX  : 'DialogBox',
                                ACTION:'Action',
                                    SHAKE:'Shake',
                                    ZOOM :'Zoom',
                                    ANIMATE:'Animate',
                                    JUMP:'Jump',
                                    CHANGE:'Change',
                                    POSTURE:'Posture',
                            LINES:'Lines'

};

util.deepFreeze(GameString);

module.exports = GameString;
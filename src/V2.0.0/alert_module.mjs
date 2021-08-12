import { AlertismBackdrop, AlertismAlertContainer, AlertismCrossBtn, AlertismIcon, AlertismHeading, AlertismContent, AlertismInput, AlertismTextarea, AlertismBtnContainer, AlertismOkBtn, AlertismCloseBtn, AlertismGlassMorphism, AlertismFooter, AlertismTimerCountDown, checkIcon } from "./constants.mjs";

export default function Alertism(_0xe270x12) {
    document['body']['appendChild'](AlertismBackdrop);
    AlertismCrossBtn['innerText'] = 'X', AlertismBackdrop['className'] = 'alert-backdrop', AlertismAlertContainer['className'] = 'alert-container', AlertismCrossBtn['className'] = 'alert-close alert-hide', AlertismIcon['classList']['add']('alert-hide');
    AlertismHeading['classList']['add']('alert-heading'), AlertismContent['classList']['add']('alert-content'), AlertismInput['className'] = 'alert-input alert-hide', AlertismInput['type'] = 'text';
    AlertismInput['value'] = '';
    AlertismInput['placeholder'] = 'Enter Text', AlertismTextarea['className'] = 'alert-input';
    AlertismTextarea['value'] = '';
    AlertismTextarea['placeholder'] = 'Enter Text', AlertismIcon['innerHTML'] = checkIcon['tickIcon'];
    AlertismBtnContainer['classList']['add']('alert-buttons-container'), AlertismCloseBtn['classList']['add']('alert-hide'), AlertismGlassMorphism['className'] = 'alert-glassmorphism alert-hide', AlertismFooter['className'] = 'alert-footer alert-hide', AlertismTimerCountDown['className'] = 'alert-time-line alert-hide', document['body']['style']['overflow'] = 'hidden';
    if (_0xe270x12['backdrop'] !== undefined) {
        AlertismBackdrop['style']['background'] = _0xe270x12['backdrop']
    } else {
        AlertismBackdrop['style']['background'] = 'rgb(0 0 0 / 50%)'
    };
    if (_0xe270x12['position'] !== undefined) {
        AlertismBackdrop['classList']['add']('alert-' + _0xe270x12['position'])
    } else {
        AlertismBackdrop['className'] = 'alert-backdrop'
    };
    AlertismAlertContainer['style']['background'] = _0xe270x12['background'] || '#fff';
    if (_0xe270x12['enableCloseBtn'] !== undefined) {
        if (_0xe270x12['enableCloseBtn'] === true) {
            AlertismCrossBtn['classList']['remove']('alert-hide')
        } else {
            AlertismCrossBtn['classList']['add']('alert-hide')
        }
    } else {
        AlertismCrossBtn['classList']['add']('alert-hide')
    };
    if (_0xe270x12['enableIcon'] !== undefined) {
        if (_0xe270x12['enableIcon'] === true) {
            AlertismIcon['classList']['remove']('alert-hide')
        } else {
            AlertismIcon['classList']['add']('alert-hide')
        }
    } else {
        AlertismIcon['classList']['add']('alert-hide')
    };
    if (_0xe270x12['icon'] !== undefined) {
        if (_0xe270x12['icon']['type'] !== undefined) {
            AlertismIcon['innerHTML'] = checkIcon[_0xe270x12['icon']['type'] + 'Icon']
        };
        if (_0xe270x12['icon']['color'] !== undefined) {
            document['querySelectorAll']('.alert-backdrop .alert-container svg path')['forEach']((_0xe270x13) => {
                _0xe270x13['style']['fill'] = _0xe270x12['icon']['color']
            });
            if (_0xe270x12['icon']['type'] === 'warning') {
                document['querySelector']('.alert-backdrop .alert-container svg circle')['style']['fill'] = _0xe270x12['icon']['color']
            }
        };
        if (_0xe270x12['icon']['position'] === 'right') {
            document['querySelector']('.alert-backdrop .alert-container svg')['style']['left'] = '100%';
            document['querySelector']('.alert-backdrop .alert-container svg')['style']['transform'] = 'translateX(-100%)'
        } else {
            if (_0xe270x12['icon']['position'] === 'left') {
                document['querySelector']('.alert-backdrop .alert-container svg')['style']['left'] = '0';
                document['querySelector']('.alert-backdrop .alert-container svg')['style']['transform'] = 'translateX(0)'
            }
        }
    };
    if (_0xe270x12['alertHeading'] !== undefined) {
        AlertismHeading['innerText'] = _0xe270x12['alertHeading']
    } else {
        AlertismHeading['innerText'] = 'Alert'
    };
    if (_0xe270x12['alertText'] !== undefined) {
        AlertismContent['innerText'] = _0xe270x12['alertText']
    } else {
        if (_0xe270x12['alertHTML'] !== undefined) {
            AlertismContent['innerHTML'] = _0xe270x12['alertHTML']
        } else {
            AlertismContent['innerText'] = 'This is an Alert Box. This is made by Alertism.js V2.0.0, The Alertism.js V2.0.0 is version 2 of a JavaScript Library by Assassin.'
        }
    };
    if (_0xe270x12['enableInput'] !== undefined) {
        if (_0xe270x12['enableInput'] === true) {
            AlertismInput['classList']['remove']('alert-hide')
        } else {
            AlertismInput['classList']['add']('alert-hide')
        }
    } else {
        AlertismInput['classList']['add']('alert-hide')
    };
    if (_0xe270x12['input'] !== undefined) {
        if (_0xe270x12['input']['type'] !== undefined) {
            AlertismInput['type'] = _0xe270x12['input']['type'];
            if (_0xe270x12['input']['type'] === 'textarea') {
                AlertismInput['parentNode']['replaceChild'](AlertismTextarea, AlertismInput)
            }
        };
        if (_0xe270x12['input']['value'] !== undefined) {
            AlertismInput['value'] = _0xe270x12['input']['value'];
            AlertismTextarea['value'] = _0xe270x12['input']['value']
        };
        if (_0xe270x12['input']['placeholder'] !== undefined) {
            AlertismInput['placeholder'] = _0xe270x12['input']['placeholder'];
            AlertismTextarea['placeholder'] = _0xe270x12['input']['placeholder']
        }
    } else {
        AlertismInput['type'] = 'text';
        AlertismInput['value'] = '';
        AlertismInput['placeholder'] = 'Enter Text'
    };
    if (_0xe270x12['btnText'] !== undefined) {
        AlertismOkBtn['innerText'] = _0xe270x12['btnText']
    } else {
        AlertismOkBtn['innerText'] = 'Ok'
    };
    if (_0xe270x12['closeBtnText'] !== undefined) {
        AlertismCloseBtn['classList']['remove']('alert-hide'), AlertismCloseBtn['innerText'] = _0xe270x12['closeBtnText']
    } else {
        AlertismCloseBtn['classList']['add']('alert-hide'), AlertismCloseBtn['innerText'] = ''
    };
    if (_0xe270x12['alertFooter'] !== undefined) {
        AlertismFooter['classList']['remove']('alert-hide'), AlertismFooter['innerHTML'] = _0xe270x12['alertFooter']
    } else {
        AlertismFooter['classList']['add']('alert-hide'), AlertismFooter['innerHTML'] = ''
    };
    if (_0xe270x12['animation'] !== undefined) {
        AlertismAlertContainer['style']['animation'] = _0xe270x12['animation'] + ' 0.5s linear 1'
    } else {
        if (_0xe270x12['animationIn'] !== undefined) {
            AlertismAlertContainer['style']['animation'] = _0xe270x12['animationIn'] + ' 0.5s linear 1'
        } else {
            AlertismAlertContainer['style']['animation'] = ''
        }
    };
    AlertismOkBtn['onclick'] = () => {
        closeAlertism(_0xe270x12['animation'], _0xe270x12['animationOut'], _0xe270x12['onConfirmed'])
    };
    AlertismCloseBtn['onclick'] = () => {
        closeAlertism(_0xe270x12['animation'], _0xe270x12['animationOut'], _0xe270x12['onDenied'])
    };
    AlertismCrossBtn['onclick'] = () => {
        closeAlertism(_0xe270x12['animation'], _0xe270x12['animationOut'], _0xe270x12['onCanceled'])
    };
    if (_0xe270x12['theme'] !== undefined) {
        if (_0xe270x12['theme'] === 'glass') {
            AlertismGlassMorphism['classList']['remove']('alert-hide')
        } else {
            AlertismGlassMorphism['classList']['add']('alert-hide')
        };
        AlertismAlertContainer['classList']['add']('alert-' + _0xe270x12['theme'])
    } else {
        AlertismAlertContainer['className'] = 'alert-container'
    };
    if (_0xe270x12['timer'] !== undefined) {
        AlertismTimerCountDown['classList']['remove']('alert-hide');
        AlertismTimerCountDown['style']['animation'] = 'closeTimeLine ' + (Number(_0xe270x12['timer']) / 1000) + 's linear';
        AlertismBtnContainer['classList']['add']('alert-hide');
        AlertismCrossBtn['classList']['add']('alert-hide');
        AlertismTimerCountDown['onanimationend'] = () => {
            AlertismTimerCountDown['classList']['add']('alert-hide')
        };
        setTimeout(() => {
            closeAlertism(_0xe270x12['animation'], _0xe270x12['animationOut'], _0xe270x12['onAutoClose'])
        }, Number(_0xe270x12['timer']))
    } else {
        AlertismTimerCountDown['classList']['add']('alert-hide');
        AlertismBtnContainer['classList']['remove']('alert-hide')
    }
}

function closeAlertism(_0xe270x15, _0xe270x16, _0xe270x17) {
    if (_0xe270x15) {
        AlertismAlertContainer['style']['animation'] = _0xe270x15 + '-out 0.5s linear 1'
    } else {
        if (_0xe270x16) {
            AlertismAlertContainer['style']['animation'] = _0xe270x16 + ' 0.5s linear 1'
        } else {
            AlertismAlertContainer['style']['animation'] = ''
        }
    };
    setTimeout(() => {
        AlertismBackdrop['remove']();
        document['body']['style']['overflow'] = 'auto';
        if (_0xe270x17) {
            _0xe270x17()
        }
    }, 500)
}

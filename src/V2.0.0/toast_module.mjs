import { AlertismToastContainer, AlertismToast, AlertismToastGlassMorphism, AlertismToastIcon, AlertismToastText, AlertismToastTimerCountDown, checkIcon } from "./constants.mjs";

export default function Toast(_0xe270x12) {
    AlertismToastContainer['className'] = 'alert-toast-container', AlertismToast['className'] = 'alert-toast', AlertismToastGlassMorphism['className'] = 'alert-glassmorphism alert-hide', AlertismToastIcon['classList']['add']('alert-hide'), AlertismToastIcon['innerHTML'] = checkIcon['tickIcon'];
    AlertismToastTimerCountDown['className'] = 'alert-time-line alert-hide';
    document['body']['appendChild'](AlertismToastContainer);
    AlertismToastText['innerText'] = _0xe270x12['text'] || 'Hello, I am a toast from Alertism V2.0.0';
    AlertismToast['style']['background'] = _0xe270x12['background'] || '#333';
    AlertismToast['style']['color'] = _0xe270x12['color'] || '#fff';
    if (_0xe270x12['position'] !== undefined) {
        AlertismToastContainer['classList']['add']('alert-' + _0xe270x12['position'])
    } else {
        AlertismToastContainer['className'] = 'alert-toast-container'
    };
    if (_0xe270x12['enableIcon'] !== undefined) {
        if (_0xe270x12['enableIcon'] === true) {
            AlertismToastIcon['classList']['remove']('alert-hide')
        } else {
            AlertismToastIcon['classList']['add']('alert-hide')
        }
    } else {
        AlertismToastIcon['classList']['add']('alert-hide')
    };
    if (_0xe270x12['icon'] !== undefined) {
        if (_0xe270x12['icon']['type'] !== undefined) {
            AlertismToastIcon['innerHTML'] = checkIcon[_0xe270x12['icon']['type'] + 'Icon']
        };
        if (_0xe270x12['icon']['color'] !== undefined) {
            document['querySelectorAll']('.alert-toast-container .alert-toast svg path')['forEach']((_0xe270x13) => {
                _0xe270x13['style']['fill'] = _0xe270x12['icon']['color']
            });
            if (_0xe270x12['icon']['type'] === 'warning') {
                document['querySelector']('.alert-toast-container .alert-toast svg circle')['style']['fill'] = _0xe270x12['icon']['color']
            }
        }
    };
    if (_0xe270x12['theme'] !== undefined) {
        if (_0xe270x12['theme'] === 'glass') {
            AlertismToastGlassMorphism['classList']['remove']('alert-hide')
        } else {
            AlertismToastGlassMorphism['classList']['add']('alert-hide')
        };
        AlertismToast['classList']['add']('alert-' + _0xe270x12['theme'])
    } else {
        AlertismToast['className'] = 'alert-toast'
    };
    if (_0xe270x12['showTimeLine'] !== undefined) {
        if (_0xe270x12['showTimeLine'] === true) {
            AlertismToastTimerCountDown['classList']['remove']('alert-hide');
            AlertismToastTimerCountDown['style']['animation'] = 'closeTimeLine ' + (Number(_0xe270x12['timer'] || 1500) / 1000) + 's linear';
            AlertismToastTimerCountDown['onanimationend'] = () => {
                AlertismToastTimerCountDown['classList']['add']('alert-hide')
            }
        } else {
            AlertismToastTimerCountDown['classList']['add']('alert-hide')
        }
    } else {
        AlertismToastTimerCountDown['classList']['add']('alert-hide')
    };
    if (_0xe270x12['animation'] !== undefined) {
        AlertismToast['style']['animation'] = _0xe270x12['animation'] + ' 0.5s, ' + _0xe270x12['animation'] + '-out 0.5s ' + (Number(_0xe270x12['timer'] || 1500) / 1000) + 's'
    } else {
        AlertismToast['style']['animation'] = 'Bottom 0.5s, Bottom-out 0.5s ' + (Number(_0xe270x12['timer'] || 1500) / 1000) + 's'
    };
    setTimeout(() => {
        AlertismToastContainer['remove']();
        if (_0xe270x12['onClose']) {
            _0xe270x12['onClose']()
        }
    }, Number(_0xe270x12['timer'] || 1500) + 500)
}

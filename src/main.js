/**
 * Babel + Webpack workaround for autoNumeric
 *
 * @author Alexandre Bonneau <alexandre.bonneau@linuxfr.eu>
 * @copyright © 2017 Alexandre Bonneau
 *
 * The MIT License (http://www.opensource.org/licenses/mit-license.php)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sub license, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/* global module */

import AutoNumeric from './AutoNumeric';
import AutoNumericEvents from './AutoNumericEvents';
import AutoNumericOptions from './AutoNumericOptions';
import AutoNumericDefaultSettings from './AutoNumericDefaultSettings';
import AutoNumericPredefinedOptions from './AutoNumericPredefinedOptions';

/* eslint no-unused-vars: 0 */

/**
 * This file serve as the main entry point to the library.
 * cf. workaround detailed here http://stackoverflow.com/a/33683495/2834898
 *
 * @type {AutoNumeric}
 */
module.exports = AutoNumeric;
//TODO Also export the AutoNumericEnum module

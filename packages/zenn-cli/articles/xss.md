$$
"<img/src=./ onerror=alert(location)>
e^{i\theta} = i\sin\thetae^{i\theta}
$$

$$
e^{i\theta"<img/src=./ onerror=alert(location)>} = \cos\theta + i\sin\thetae^{i\theta}
$$

.
[normal link](javascript)
.

<p><a href="javascript">normal link</a></p>
.

Should not allow some protocols in links and images
.
[xss link](<javascript:alert(1)>)

[xss link](<JAVASCRIPT:alert(1)>)

[xss link](<vbscript:alert(1)>)

[xss link](<VBSCRIPT:alert(1)>)

[xss link](file:///123)
.

<p>[xss link](javascript:alert(1))</p>
<p>[xss link](JAVASCRIPT:alert(1))</p>
<p>[xss link](vbscript:alert(1))</p>
<p>[xss link](VBSCRIPT:alert(1))</p>
<p>[xss link](file:///123)</p>
.

.
[xss link](<"><script>alert("xss")</script>>)

[xss link](<Javascript:alert(1)>)

[xss link](<Javascript:alert(1)>)

[xss link](<Javascript:alert(1)>)
.

<p><a href="%22%3E%3Cscript%3Ealert(%22xss%22)%3C/script%3E">xss link</a></p>
<p>[xss link](Javascript:alert(1))</p>
<p><a href="&amp;#74;avascript:alert(1)">xss link</a></p>
<p><a href="&amp;#74;avascript:alert(1)">xss link</a></p>
.

.
[xss link](<javascript:alert(1)>)
.

<p>[xss link](&lt;javascript:alert(1)&gt;)</p>
.

.
[xss link](<javascript:alert(1)>)
.

<p>[xss link](javascript:alert(1))</p>
.

Should not allow data-uri except some whitelisted mimes
.
![](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)
.

<p><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt=""></p>
.

.
[xss link](data:text/html;base64,PHNjcmlwdD5hbGVydCgnWFNTJyk8L3NjcmlwdD4K)
.

<p>[xss link](data:text/html;base64,PHNjcmlwdD5hbGVydCgnWFNTJyk8L3NjcmlwdD4K)</p>
.

.
[normal link](/javascript:link)
.

<p><a href="/javascript:link">normal link</a></p>
.

Image parser use the same code base as link.
.
![xss link](<javascript:alert(1)>)
.

<p>![xss link](javascript:alert(1))</p>
.

Autolinks
.
<javascript&#x3A;alert(1)>

<javascript:alert(1)>
.

<p>&lt;javascript:alert(1)&gt;</p>
<p>&lt;javascript:alert(1)&gt;</p>
.

Linkifier
.
javascript&#x3A;alert(1)

javascript:alert(1)
.

<p>javascript:alert(1)</p>
<p>javascript:alert(1)</p>
.

References
.
[test]: javascript:alert(1)
.

<p>[test]: javascript:alert(1)</p>
.

Make sure we decode entities before split:
.

```js custom-class
test1;
```

```jscustom-class
test2
```

.

<pre><code class="js">test1
</code></pre>
<pre><code class="js">test2
</code></pre>

.

```
<script>alert("xss")</script>
```

```js
<script>alert("xss")</script>
```

```<script>alert("xss")</script>
hello
```

```js <script>alert("xss")</script>
hello;
```

```js:<script>alert("xss")</script>
hello
```

<script>alert("xss")</script>

<script>
    let count = 0;

    const increase = () => count++;
    const decrease = () => count--;
    // 반응형 코드 조건절 사용을 위해 주석처리
    // const decrease = () => {
    //     if (count === 0) {
    //         alert("Can\'t be reduced any further!!");
    //     } else {
    //         count--;
    //     }
    // };
    $: if(count >= 10) {
        alert("Count can\'t be greater than 9");
        count = 9;
    }
    $: if(count < 0) {
        alert("Count can\'t be smaller than 0");
        count = 0;
    }

    // 반응형 변수 선언
    $: squared = count * count;
    // 상태변수의 값을 할당받은 상태변수
    // (이 값이 직접 변하기 전까진 반응성이 없음)
    let threeSquared;

    $: {
        // 아래와 같이 변수할당은 될 것 같은데 에러남
        // squared1 = count * count;
        // doubled = count * 2;
        
        // 코드만 수행됨(값이 변경될 때만 로그를 출력함)
        console.log("Squared: " + squared);

        // count값이 변경될 때 마다 threeSquared값을 직접 변경하기 때문에
        // 템플릿에서 정상적으로 변경됨
        threeSquared = count * count * count;
    }
</script>

<h1>Responsive Variable</h1>

<h3>Current Count: {count} {count <= 1 ? "time": "times"}</h3>
<h4>Squared: {squared}, 3-Squared: {threeSquared}</h4>
<!-- 아래와 같이하면 에러남 -->
<!-- <h4>Squared: {squared1}, doubled: {doubled}</h4> -->

<button on:click={increase}> + </button>
<button on:click={decrease}> - </button>

<hr/>
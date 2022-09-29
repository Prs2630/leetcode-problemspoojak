// 88. Merge Sorted Array
var merge = function (nums1, m, nums2, n) {
    let first = m - 1;
    let second = n - 1;
    for (let i = m + n - 1; i >= 0; i--) {
        if (second < 0) {
            break
        }
        if (nums1[first] > nums2[second]) {//if number is greater than//3//2
            nums1[i] = nums1[first]
            first--
        }
        else {//if number is less than 
            nums1[i] = nums2[second]
            second--

        }
    }


}


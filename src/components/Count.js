import React from 'react'
import { connect } from 'dva';
import styles from './index.less'

const CountApp = ({count, dispatch}) => {
	return (
		<div className={styles.normal}>
			<div className={styles.record}>Highest Record： {count.record}</div>
			<div className={styles.current}>{count.current}</div>
			<div className={styles.button}>
				<button onClick={() => {dispatch({type: 'count/add'})}}>+</button>
			</div>
		</div>
	)
}

function mapStateToProps(state) {
	return {
		count : state.count
	}
}

const HomePage = connect(mapStateToProps)(CountApp)

export default HomePage;